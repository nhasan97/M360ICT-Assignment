import React from "react";
import logo from "../assets/logo.png";
import { Layout } from "antd";

const { Sider } = Layout;

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  // color: "#fff",
  backgroundColor: "white",
  borderRight: "1px solid #F3F3F3",
};

const Sidebar = () => {
  return (
    <Sider width="249px" style={siderStyle}>
      <img src={logo} alt="" />
    </Sider>
  );
};

export default Sidebar;
