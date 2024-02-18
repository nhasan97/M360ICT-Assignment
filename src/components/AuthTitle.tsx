import { Flex } from "antd";
import React, { FC } from "react";

interface TitleProps {
  mainTitle: string;
  subTitle: string;
}

const AuthTitle: FC<TitleProps> = (props): JSX.Element => {
  const authTitleStyle: React.CSSProperties = {
    fontSize: "26px",
    fontWeight: "700",
    textAlign: "center",
    color: "#323B4B",
    height: "40px",
  };

  const authSubTitleStyle: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: "500",
    textAlign: "center",
    color: "#8A94A6",
    height: "100px",
  };

  return (
    <Flex vertical justify="center" align="center">
      <h1 style={authTitleStyle}>{props.mainTitle}</h1>
      <p style={authSubTitleStyle}>{props.subTitle}</p>
    </Flex>
  );
};

export default AuthTitle;
