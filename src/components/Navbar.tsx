import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  // color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "white",
};

const Navbar = () => {
  return <Header style={headerStyle}>Header</Header>;
};

export default Navbar;
