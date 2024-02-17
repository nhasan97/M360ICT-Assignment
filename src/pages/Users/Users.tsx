import { useUsersQuery } from "../../api/usersAPI";
import Loading from "../../components/Loading";
import UsersTable from "../../components/Users/UsersTable";
import React, { useState } from "react";

const Users = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isFetching, isSuccess } = useUsersQuery(page);

  const fetchData = (page: number) => {
    setPage(page);
  };

  const showDropDown = (id: string) => {
    const dropdown = document.getElementById(id);
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
      dropdown.classList.add("hidden");
    } else {
      dropdown.classList.add("show");
      dropdown.classList.remove("hidden");
    }
  };

  const usersContainerStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    padding: "0px 38px 23px 38px",
  };

  const usersTableContainerHeadingStyle: React.CSSProperties = {
    fontSize: "23px",
    fontWeight: "600",
    color: "#323B4B",
    textAlign: "left",
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
        <h1 style={usersTableContainerHeadingStyle}>Users List</h1>
        <UsersTable
          data={data}
          page={page}
          fetchData={fetchData}
          showDropDown={showDropDown}
        ></UsersTable>
      </div>
    );
  }
};

export default Users;
