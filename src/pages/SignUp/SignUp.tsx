import { Button, Checkbox, Flex, Form, Input } from "antd";
import { Link } from "react-router-dom";
import AuthTitle from "../../components/AuthTitle";
import AuthButtons from "../../components/AuthButtons";
import AuthDivider from "../../components/AuthDivider";
import emailIcon from "../../assets/at.png";
import passIcon from "../../assets/lock.png";
import smilyIcon from "../../assets/smily.png";
import { useState } from "react";
import AuthSteps from "../../components/AuthSteps";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const onFinish = (values: object) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: object) => {
    console.log("Failed:", errorInfo);
  };

  const title = {
    mainTitle: "Getting Started",
    subTitle: "Create an account to continue!",
  };

  type FieldType = {
    username?: string;
    email?: string;
    password?: string;
    remember?: string;
  };

  const signUpPageStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    // border: "1px solid red",
    overflowY: "auto",
  };

  const signUpContainerStyle: React.CSSProperties = {
    width: "42%",
    height: "100%",
    // border: "1px solid red",
  };

  return (
    <Flex vertical justify="center" align="center" style={signUpPageStyle}>
      <Flex
        vertical
        justify="center"
        align="center"
        style={signUpContainerStyle}
      >
        <AuthTitle
          mainTitle={title.mainTitle}
          subTitle={title.subTitle}
        ></AuthTitle>

        <AuthButtons></AuthButtons>

        <AuthDivider></AuthDivider>

        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="forms"
        >
          <Form.Item<FieldType>
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please enter a valid email address.",
              },
            ]}
          >
            <div className="input-holder">
              <img src={emailIcon}></img>
              <Input
                className="form-input"
                value={email}
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </Form.Item>

          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <div className="input-holder">
              <img src={smilyIcon}></img>
              <Input className="form-input" placeholder="Your Name" />
            </div>
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <div className="input-holder">
              <img src={passIcon}></img>
              <Input.Password
                className="form-input"
                value={password}
                placeholder="Create Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </Form.Item>

          <AuthSteps></AuthSteps>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            style={{ textAlign: "left" }}
          >
            <Checkbox className="check-text">
              I agree to the Terms & Conditions
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="form-btn">
              Sign Up
            </Button>
          </Form.Item>
          {/* {error && <SomethingWrong error={error}></SomethingWrong>} */}
        </Form>

        <p className="page-switch-link">
          Already have an account? <Link to={"/"}>Sign In</Link>
        </p>
      </Flex>
    </Flex>
  );
};

export default SignUp;
