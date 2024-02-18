import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Flex, Row, Statistic } from "antd";
import groupImg from "../../assets/group.png";

const Dashboard = () => {
  const dashboardConatinerStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    overflowY: "auto",
  };

  return (
    <Flex
      vertical
      justify="center"
      align="center"
      style={dashboardConatinerStyle}
    >
      <img src={groupImg} style={{ width: "30%" }}></img>

      <Row gutter={16}>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Idle"
              value={39.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </Flex>
  );
};

export default Dashboard;
