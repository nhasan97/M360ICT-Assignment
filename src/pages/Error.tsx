import { Button, Flex, Result } from "antd";
import { useNavigate } from "react-router-dom";

const Error = () => {
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
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Button type="primary" onClick={handlePageError}>
            Go Back
          </Button>
        }
      />
    </Flex>
  );
};

export default Error;
