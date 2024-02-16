import React from "react";
import { Outlet } from "react-router-dom";
import { Layout, Flex } from "antd";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar";
// import CustomFooter from "../components/CustomFooter";

const { Content } = Layout;

const layoutStyle = {
  maxWidth: "calc(1440px)",
  width: "100%",
  height: "100vh",
  margin: "0px auto",
  borderRadius: 8,
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  height: "calc(100vh - 77px)",
  lineHeight: "120px",
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
