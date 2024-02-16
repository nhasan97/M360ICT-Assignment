import { Flex, Spin } from "antd";
const Loading = () => {
  return (
    <Flex
      justify="center"
      align="center"
      style={{ width: "100%", height: "100vh" }}
    >
      <Spin tip="Loading" size="large"></Spin>
    </Flex>
  );
};

export default Loading;
