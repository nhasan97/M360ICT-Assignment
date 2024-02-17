import { Flex, Layout, Select } from "antd";
import logo from "../../assets/logo.png";
import "./AuthenticationLayoutNavbar.css";

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  width: "100%",
  height: "fit-content",
  padding: "0px",
  backgroundColor: "white",
  // border: "1px solid #4096ff",
};

const navbarLogoStyle: React.CSSProperties = {
  width: "159.06px",
  height: "45.82px",
  padding: "0px",
};

const navbarSelectStyle: React.CSSProperties = {
  width: "146px",
  height: "43px",
};

const AuthenticationLayoutNavbar = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Header style={headerStyle}>
      <Flex justify="space-between" align="center">
        <img src={logo} alt="" style={navbarLogoStyle} />
        <Select
          defaultValue="English (UK)"
          style={navbarSelectStyle}
          onChange={handleChange}
          options={[
            { value: "English (UK)", label: "English (UK)" },
            { value: "English (USA)", label: "English (USA)" },
            { value: "Mandarin", label: "Mandarin" },
            { value: "Hindi", label: "Hindi" },
            { value: "Urdu", label: "Urdu" },
            { value: "Spanish", label: "Spanish" },
            {
              value: "Modern Standard Arabic",
              label: "Modern Standard Arabic",
            },
            { value: "Bengali", label: "Bengali" },
            { value: "Russian", label: "Russian" },
          ]}
        />
      </Flex>
    </Header>
  );
};

export default AuthenticationLayoutNavbar;
