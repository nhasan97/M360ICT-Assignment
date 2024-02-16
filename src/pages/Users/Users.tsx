import { useUsersQuery } from "../../api/usersAPI";
import Loading from "../../components/Loading";
import { MenuProps } from "antd";
import UsersTable from "../../components/Users/UsersTable";
import React, { useState } from "react";

const Users = () => {
  const [page, setPage] = useState(1);

  const { data, error, isLoading, isFetching, isSuccess } = useUsersQuery(page);

  const fetchData = (page: number) => {
    setPage(page);
  };

  const onMenuClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };

  const usersContainerStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    padding: "0px 38px 23px 38px",
  };
  const usersTableConatinerStyle: React.CSSProperties = {
    width: "100%",
    height: "calc(100% - 120px)",
    borderRadius: "12px",
    overflowY: "auto",
  };

  if (isLoading) {
    return <Loading></Loading>;
  } else if (isFetching) {
    return <Loading></Loading>;
  } else if (error) {
    return <h1>something went wrong</h1>;
  }

  if (isSuccess) {
    return (
      <div style={usersContainerStyle}>
        <h1
          style={{
            fontSize: "23px",
            fontWeight: "600",
            color: "#323B4B",
            textAlign: "left",
          }}
        >
          Users List
        </h1>
        <div style={usersTableConatinerStyle}>
          <UsersTable
            data={data}
            onMenuClick={onMenuClick}
            fetchData={fetchData}
          ></UsersTable>
        </div>
      </div>
    );
  }
};

export default Users;
