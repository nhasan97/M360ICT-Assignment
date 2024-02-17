import { Outlet } from "react-router-dom";
import React from "react";
import { Layout, Flex } from "antd";
import AuthenticationLayoutNavbar from "../components/AuthenticationLayoutNavbar/AuthenticationLayoutNavbar";

const { Content } = Layout;

const layoutStyle = {
  maxWidth: "calc(1440px)",
  width: "100%",
  height: "100vh",
  margin: "0px auto",
  padding: "28px 81px",
  backgroundColor: "white",
  // border: "1px solid red",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  height: "calc(100% - 45.81px)",
  lineHeight: "120px",
  backgroundColor: "white",
  // border: "1px solid red",
};

const AuthenticationLayout = () => {
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout style={layoutStyle}>
        <AuthenticationLayoutNavbar></AuthenticationLayoutNavbar>
        <Content style={contentStyle}>
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Flex>
  );
};

export default AuthenticationLayout;
