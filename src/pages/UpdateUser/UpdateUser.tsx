import { Button, Form, Input, Upload } from "antd";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  id?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
};

const formStyle: React.CSSProperties = {
  //   width: "100%",
  maxWidth: "600",
};

const UpdateUser = () => {
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={formStyle}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Your ID"
          name="id"
          hidden
          // initialValue={}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input readOnly required hidden />
        </Form.Item>

        <Form.Item<FieldType>
          label="First Name"
          name="first_name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Last Name"
          name="last_name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Profile Image"
          name="avatar"
          rules={[
            {
              required: true,
              message: "Please choose an image!",
            },
          ]}
        >
          <Upload
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            listType="picture"
            // fileList={}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateUser;