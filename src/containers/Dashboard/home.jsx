import React, { useState } from "react";
import { BarChart } from "../../components/Charts/barChart";
import {
  Row,
  Col,
  Space,
  Divider,
  Layout,
  PageHeader,
  Button,
  Descriptions,
  Breadcrumb,
  Rate,
} from "antd";
import "./home.css";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

const renderContent = (column = 2) => (
  <Descriptions
    size="small"
    column={column}
    style={{ border: "1px solid red" }}
  >
    <Descriptions.Item label="Franchise Name:">Lili Qu</Descriptions.Item>
    <Descriptions.Item label="Franchise Id">
      <a>421421</a>
    </Descriptions.Item>
    <Descriptions.Item label="Franchised From">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="Franchise  Rating ">
      {" "}
      <Rate disabled defaultValue={5} style={{ fontSize: "14px" }} />
    </Descriptions.Item>
    <Descriptions.Item label="Location coverage">
      Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>
);

const Home = ({ match }) => {
  const { Header, Footer, Sider } = Layout;
  const Content = ({ children, extra }) => (
    <div className="content">
      <div className="main">{children}</div>

      <div className="extra">{extra}</div>
    </div>
  );
  const extraContent = (
    <div
      style={{
        display: "flex",
        width: "max-content",
        justifyContent: "flex-end",
        border: "1px solid red",
        marginLeft: "35%",
      }}
    ></div>
  );
  const paginations = (
    <Breadcrumb>
      <Breadcrumb.Item href="">
        <span>Application List </span>
        <UserOutlined />
      </Breadcrumb.Item>
      <Breadcrumb.Item>Application</Breadcrumb.Item>
    </Breadcrumb>
  );
  return (
    <>
      <Layout>
        <PageHeader
          className="site-page-header-responsive"
          onBack={() => window.history.back()}
          title="Home"
          subTitle={paginations}
          extra={[
            <Button key="3">Operation</Button>,
            <Button key="2">Operation</Button>,
            <Button key="1" type="primary">
              Primary
            </Button>,
          ]}
        >
          <Content extra={extraContent}>{renderContent()}</Content>
        </PageHeader>
        <Content>
          <Row justify={"space-between"}>
            <Col
              style={{ border: "1px solid red " }}
              xs={10}
              sm={10}
              md={10}
              lg={12}
              xl={12}
            >
              col-12
            </Col>{" "}
            <Col
              xs={10}
              sm={14}
              md={14}
              lg={12}
              xl={12}
              style={{ border: "1px solid red " }}
            >
              <BarChart />
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default Home;
