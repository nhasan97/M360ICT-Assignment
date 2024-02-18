import { Button, Flex } from "antd";
import React from "react";
import icon1 from "../assets/apple-icon.png";
import icon2 from "../assets/google-icon.png";

const AuthButtons = () => {
  const authButtonStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    fontSize: "16px",
    fontWeight: "500",
    color: "#8A94A6",
    backgroundColor: "#F0F5FA",
    padding: "28px 24px",
    borderRadius: "16px",
  };

  return (
    <Flex justify="space-between" align="center" gap={24}>
      <Button className="common-btn-styling" style={authButtonStyle}>
        <img src={icon2} alt="" />
        Sign In with Google
      </Button>

      <Button className="common-btn-styling" style={authButtonStyle}>
        <img src={icon1} alt="" />
        Sign In with Apple ID
      </Button>
    </Flex>
  );
};

export default AuthButtons;
