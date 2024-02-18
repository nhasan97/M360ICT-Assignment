import { Divider } from "antd";

const AuthDivider = () => {
  const authDividerStyle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: "500",
    color: "#8A94A6",
  };

  return (
    <div>
      <Divider plain style={authDividerStyle}>
        Or
      </Divider>
    </div>
  );
};

export default AuthDivider;
