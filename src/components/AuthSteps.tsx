import type { StepsProps } from "antd";
import { Popover, Steps } from "antd";

const customDot: StepsProps["progressDot"] = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

const description = "";

const AuthSteps = () => {
  return (
    <Steps
      style={{ padding: "20px 0px" }}
      current={2}
      progressDot={customDot}
      items={[
        {
          title: "",
          description,
        },
        {
          title: "",
          description,
        },
        {
          title: "",
          description,
        },
        {
          title: "",
          description,
        },
      ]}
    />
  );
};

export default AuthSteps;
