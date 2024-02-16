import React from "react";
import logo from "../../assets/logo.png";
import { Layout } from "antd";
import SidebarMenu from "./SidebarMenu";
const { Sider } = Layout;

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "31px 13px",
  backgroundColor: "white",
  borderRight: "1px solid #F3F3F3",
};

const siderLogoStyle: React.CSSProperties = {
  width: "159.06px",
  height: "45.82px",
  padding: "0px",
  margin: "0px auto 40px -24px",
};

const Sidebar = () => {
  return (
    <Sider width="249px" style={siderStyle}>
      <img src={logo} alt="" style={siderLogoStyle} />
      <SidebarMenu></SidebarMenu>
    </Sider>
  );
};

export default Sidebar;
