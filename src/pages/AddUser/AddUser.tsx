import { Button, Flex, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useAddUserMutation } from "../../api/usersAPI";
import { User } from "../../models/user.model";
import toast from "react-hot-toast";

const AddUser = () => {
  const [addUser] = useAddUserMutation();

  const randomIdGenerator = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const onFinish = async (values: User) => {
    await addUser(values);
    toast.success("Added Successfully!");
  };

  const onFinishFailed = (errorInfo: object) => {
    toast.error("Action Failed" + errorInfo);
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
            initialValue={randomIdGenerator(12, 30)}
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input readOnly required hidden />
          </Form.Item>

          <Form.Item<FieldType>
            name="first_name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="First Name" className="form-input" />
          </Form.Item>

          <Form.Item<FieldType>
            name="last_name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Last Name" className="form-input" />
          </Form.Item>

          <Form.Item<FieldType>
            name="email"
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
            initialValue={
              "https://i.ibb.co/R4sPcP1/pngtree-stunning-modern-villa-entryway-rendered-in-3d-at-twilight-picture-image-3748237.png"
            }
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

          <Form.Item>
            <Button type="primary" htmlType="submit" className="form-btn">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  );
};

export default AddUser;
