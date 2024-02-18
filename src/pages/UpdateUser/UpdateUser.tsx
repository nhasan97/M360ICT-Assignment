import { Button, Flex, Form, Input } from "antd";
import React from "react";
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
    await updateUser(data.data);
    toast.success("Updated Successfully!");
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

  const addUserPageStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    overflowY: "auto",
  };

  const addUserContainerStyle: React.CSSProperties = {
    width: "50%",
    height: "100%",
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
      <Flex vertical justify="center" align="center" style={addUserPageStyle}>
        <Flex
          vertical
          justify="center"
          align="center"
          style={addUserContainerStyle}
        >
          <Form
            name="basic"
            className="forms"
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
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input readOnly required hidden />
            </Form.Item>

            <Form.Item<FieldType>
              name="first_name"
              initialValue={data.data.first_name}
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="First Name" className="form-input" />
            </Form.Item>

            <Form.Item<FieldType>
              name="last_name"
              initialValue={data.data.last_name}
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Last Name" className="form-input" />
            </Form.Item>

            <Form.Item<FieldType>
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
              <Input placeholder="Email" className="form-input" />
            </Form.Item>

            <Form.Item<FieldType>
              name="avatar"
              initialValue={data.data.avatar}
              rules={[
                {
                  required: true,
                  message: "Please choose an image!",
                },
              ]}
            >
              <Input placeholder="Photo URL" className="form-input" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="form-btn">
                Update
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
    );
  }
};

export default UpdateUser;
