import { Avatar, Button, Flex, Pagination, Table } from "antd";
import btnImg from "../../assets/options.png";
import "./UsersTable.css";
import useSearch from "../../hooks/useSearch";
import { Link } from "react-router-dom";
import { useDeleteUserMutation } from "../../api/usersAPI";
import toast from "react-hot-toast";

const UsersTable = ({ data, page, fetchData, showDropDown }) => {
  const { searchedText } = useSearch();

  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    toast.success("Deleted Successfully!");
  };

  const usersTableConatinerStyle: React.CSSProperties = {
    width: "100%",
    height: "calc(100% - 120px)",
    borderRadius: "12px",
    overflowY: "auto",
  };

  const recordTextStyle: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: "500",
    color: "#4E5D78",
  };

  return (
    <div style={usersTableConatinerStyle}>
      <Table
        sticky
        columns={[
          {
            title: "#ID",
            dataIndex: "id",
            filteredValue: [searchedText.toLowerCase()],
            onFilter: (value, record) => {
              return (
                record.first_name.toLowerCase().includes(value) ||
                record.last_name.toLowerCase().includes(value) ||
                record.email.toLowerCase().includes(value) ||
                record.id.toString().toLowerCase().includes(value)
              );
            },
            width: "7%",
            render: (text, user) => <p style={recordTextStyle}>{user.id}</p>,
          },
          {
            title: "USER",
            dataIndex: "first_name",
            key: "first_name",
            align: "left",
            width: "40%",
            render: (text, user) => (
              <Flex justify="flex-start" align="center" gap={6}>
                <Avatar
                  shape="square"
                  size={60}
                  style={{ marginRight: "10px", borderRadius: "15px" }}
                  src={user.avatar}
                />
                <p style={recordTextStyle}>
                  {user.first_name} {user.last_name}
                </p>
              </Flex>
            ),
          },
          {
            title: "EMAIL",
            dataIndex: "email",
            width: "51%",
            render: (text, user) => <p style={recordTextStyle}>{user.email}</p>,
          },
          {
            title: "OPTIONS",
            width: "12%",
            render: (text, user) => (
              <div style={{ position: "relative" }}>
                <Button
                  id={"customBtn" + user.id}
                  className="common-btn-styling"
                  onClick={() => {
                    showDropDown("custom-dropdown" + user.id.toString());
                  }}
                >
                  <img src={btnImg} alt="" />
                </Button>

                <Flex
                  vertical
                  justify="flex-start"
                  align="center"
                  id={"custom-dropdown" + user.id}
                  className="hidden"
                >
                  <Link to={"/dashboard/add-user"}>Add User</Link>
                  <Link to={`/dashboard/update-user/${user.id}`}>Update</Link>
                  <Link
                    to={""}
                    onClick={() => {
                      handleDelete(user.id);
                    }}
                  >
                    Delete
                  </Link>
                </Flex>
              </div>
            ),
          },
        ]}
        dataSource={data.data}
        pagination={false}
      ></Table>
      <Pagination
        style={{ position: "fixed", left: "249px", bottom: "0" }}
        pageSize={data.per_page}
        total={data.total}
        current={page}
        onChange={(page) => {
          fetchData(page);
        }}
      />
    </div>
  );
};

export default UsersTable;
