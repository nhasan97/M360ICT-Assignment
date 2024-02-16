import React from "react";
import { Avatar, Button, Flex, Input, Layout } from "antd";
import searchIcone from "../assets/loupe 1.png";
import notificationIcone from "../assets/notification-bell 1.png";

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  height: "fit-content",
  backgroundColor: "white",
  padding: "23px 38px 0px 38px",
};

const inputStyle: React.CSSProperties = {
  backgroundColor: "#F0F5FA",
  width: "539px",
  height: "54px",
  fontSize: "14px",
  fontWeight: "500",
  borderRadius: "14px",
  padding: "0px 20px",
};

const buttonStyle: React.CSSProperties = {
  position: "absolute",
  background: "transparent",
  border: "none",
  boxShadow: "none",
  transform: "translate(-10px,0px)",
};

const Navbar = () => {
  return (
    <Header style={headerStyle}>
      <Flex justify="space-between" align="center">
        <Flex
          justify="flex-end"
          align="center"
          style={{
            position: "relative",
          }}
        >
          <Input placeholder="Search" variant="filled" style={inputStyle} />
          <Button style={buttonStyle}>
            <img src={searchIcone} alt="" />
          </Button>
        </Flex>

        <Flex align="center" gap={24}>
          <Button style={{ border: "none", boxShadow: "none" }}>
            <img src={notificationIcone} alt="" />
          </Button>
          <Avatar size={47} />
        </Flex>
      </Flex>
    </Header>
  );
};

export default Navbar;
