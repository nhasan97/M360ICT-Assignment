import React from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import menu1 from "../../assets/menu 1.png";
import user1 from "../../assets/user 1.png";
import invoice1 from "../../assets/invoice 1.png";
import "./Sidebar.css";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem(
    "",
    "grp",
    null,
    [
      getItem("Dashboard", "1", <img src={menu1}></img>),
      getItem("Users", "2", <img src={user1}></img>),
      getItem("Sales", "3", <img src={invoice1}></img>),
    ],
    "group"
  ),
];

const menuStyle: React.CSSProperties = {
  width: "100%",
  textAlign: "left",
  fontWeight: "500",
  border: "none",
};
const menuHeadingStyle: React.CSSProperties = {
  fontSize: "12px",
  fontWeight: "500",
  color: "#A7AFBC",
  letterSpacing: "2px",
  textAlign: "left",
  paddingLeft: "21px",
  marginBottom: "-10px",
};

const SidebarMenu = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };
  return (
    <>
      <p style={menuHeadingStyle}>PAGES</p>
      <Menu
        className="menu-ul"
        onClick={onClick}
        style={menuStyle}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default SidebarMenu;
