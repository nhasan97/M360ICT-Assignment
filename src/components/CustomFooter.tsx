import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const CustomFooter = () => {
  return <Footer style={footerStyle}>Footer</Footer>;
};

export default CustomFooter;
