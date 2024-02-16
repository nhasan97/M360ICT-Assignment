import React from "react";
import { Outlet } from "react-router-dom";
import { Layout, Flex } from "antd";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar";
// import CustomFooter from "../components/CustomFooter";

const { Content } = Layout;

const layoutStyle = {
  // maxWidth: "calc(100% - 8px)",
  maxWidth: "calc(1440px)",
  width: "calc(100%)",
  height: "100vh",
  margin: "0px auto",
  borderRadius: 8,
  overflow: "hidden",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  // color: "#fff",
  backgroundColor: "white",
};

const DashboardLayout = () => {
  return (
    <div>
      <Flex>
        <Layout style={layoutStyle}>
          <Sidebar></Sidebar>
          <Layout>
            <Navbar></Navbar>
            <Content style={contentStyle}>
              <Outlet></Outlet>
            </Content>
            {/* <CustomFooter></CustomFooter> */}
          </Layout>
        </Layout>
      </Flex>
    </div>
  );
};

export default DashboardLayout;
