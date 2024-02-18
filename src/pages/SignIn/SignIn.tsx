import { Button, Checkbox, Flex, Form, Input } from "antd";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../../redux/slices/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import AuthTitle from "../../components/AuthTitle";
import AuthButtons from "../../components/AuthButtons";
import AuthDivider from "../../components/AuthDivider";
// import SomethingWrong from "../../components/SomethingWrong";
import emailIcon from "../../assets/at.png";
import passIcon from "../../assets/lock.png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const { loading, error } = useSelector((state) => {
  //   state.user;
  // });
  // const dispatch = useDispatch();

  const onFinish = (values: object) => {
    // const userCredentials: object = {
    //   email,
    //   password,
    // };

    // dispatch(loginUser(userCredentials)).then((result) => {
    //   if (result.payload) {
    //     setEmail("");
    //     setPassword("");
    //     navigate("/dashboard/dashboard");
    //   }
    // });
    console.log("Success:", values);
    navigate("/dashboard/users");
  };

  const onFinishFailed = (errorInfo: object) => {
    console.log("Failed:", errorInfo);
  };

  const title = {
    mainTitle: "Sign In",
    subTitle: "Welcome back, you’ve been missed!",
  };

  type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
  };

  const signInPageStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    // border: "1px solid red",
    overflowY: "auto",
  };

  const signInContainerStyle: React.CSSProperties = {
    width: "42%",
    height: "100%",
    // border: "1px solid red",
  };

  return (
    <Flex vertical justify="center" align="center" style={signInPageStyle}>
      <Flex
        vertical
        justify="center"
        align="center"
        style={signInContainerStyle}
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

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            style={{ textAlign: "left" }}
          >
            <Checkbox className="check-text">Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="form-btn">
              Sign In
            </Button>
          </Form.Item>

          {/* {error && <SomethingWrong error={error}></SomethingWrong>} */}
        </Form>

        <p className="page-switch-link">
          Don’t have an account yet? <Link to={"/register"}>Sign Up</Link>
        </p>
      </Flex>
    </Flex>
  );
};

export default SignIn;
