import { Button, Flex, Result } from "antd";
import { useNavigate } from "react-router-dom";

const SomethingWrong = () => {
  const navigate = useNavigate();

  const handlePageError = () => {
    navigate(-1);
  };

  const errorContainerStyle: React.CSSProperties = {
    width: "100%",
    height: "100vh",
  };

  return (
    <Flex style={errorContainerStyle} justify="center" align="center">
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={
          <Button type="primary" onClick={handlePageError}>
            Back Home
          </Button>
        }
      />
    </Flex>
  );
};

export default SomethingWrong;
