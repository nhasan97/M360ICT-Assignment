import { Button, Form, Input, Upload } from "antd";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { User } from "../../models/user.model";
import { useParams } from "react-router-dom";
import { useUpdateUserMutation, useUserQuery } from "../../api/usersAPI";
import Loading from "../../components/Loading";
import toast from "react-hot-toast";

const UpdateUser = () => {
  const param: object = useParams();
  const id: number = parseInt(param.id);

  const { data, error, isLoading, isFetching, isSuccess } = useUserQuery(id);
  const [updateUser] = useUpdateUserMutation();

  const onFinish = async (values: User) => {
    const res = await updateUser(data.data);
    if (res.data.updatedAt) {
      toast.success("Updated Successfully!");
    }
  };

  const onFinishFailed = (errorInfo: User) => {
    toast.error("Action Failed");
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
  if (isLoading) {
    return <Loading></Loading>;
  } else if (isFetching) {
    return <Loading></Loading>;
  } else if (error) {
    return <h1>something went wrong</h1>;
  }

  if (isSuccess) {
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
            initialValue={data.data.id}
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input readOnly required hidden />
          </Form.Item>

          <Form.Item<FieldType>
            label="First Name"
            name="first_name"
            initialValue={data.data.first_name}
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Last Name"
            name="last_name"
            initialValue={data.data.last_name}
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Email"
            name="email"
            initialValue={data.data.email}
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
            initialValue={data.data.avatar}
            rules={[
              {
                required: true,
                message: "Please choose an image!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* <Form.Item<FieldType>
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
          </Form.Item> */}

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
};

export default UpdateUser;
