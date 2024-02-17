import { Avatar, Button, Dropdown, Flex, Table } from "antd";
import btnImg from "../../assets/options.png";
import "./UsersTable.css";
import useSearch from "../../hooks/useSearch";

const UsersTable = ({ data, onMenuClick, fetchData }) => {
  const { searchedText } = useSearch();

  const items = [
    {
      key: "1",
      label: "1st item",
    },
    {
      key: "2",
      label: "2nd item",
    },
    {
      key: "3",
      label: "3rd item",
    },
  ];

  const recordTextStyle: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: "500",
    color: "#4E5D78",
  };

  return (
    <Table
      style={{ border: "none !important" }}
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
          render: (text, user) => <p style={recordTextStyle}>{user.id}</p>,
        },
        {
          title: "USER",
          dataIndex: "first_name",
          key: "first_name",
          align: "left",
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
          render: (text, user) => <p style={recordTextStyle}>{user.email}</p>,
        },
        {
          title: "OPTIONS",
          render: () => (
            <>
              <Dropdown menu={{ items, onClick: onMenuClick }}>
                <Button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  <img src={btnImg} alt="" />
                </Button>
              </Dropdown>
            </>
          ),
        },
      ]}
      dataSource={data.data}
      pagination={{
        pageSize: data.per_page,
        total: data.total,
        onChange: (page) => {
          fetchData(page);
        },
      }}
    ></Table>
  );
};

export default UsersTable;
