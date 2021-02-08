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
  Card,
  Avatar,
} from "antd";
import "./home.css";
import {
  UserOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

const renderContent = (column = 2) => (
  <Descriptions size="small" column={column}>
    {/* <Descriptions.Item label="Name:">Admin</Descriptions.Item>
    <Descriptions.Item label="Id">
      <a>123456</a>
    </Descriptions.Item>
    <Descriptions.Item label="From">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="Rating ">
      {" "}
      <Rate disabled defaultValue={5} style={{ fontSize: "14px" }} />
    </Descriptions.Item>
    <Descriptions.Item label="Location coverage">Dhaka</Descriptions.Item> */}
  </Descriptions>
);
const gridStyle = {
  width: "25%",
  textAlign: "center",
};
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
        {/* <PageHeader
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
        > */}
          {/* <Content extra={extraContent}>{renderContent()}</Content>
        </PageHeader> */}
        <Content>
          <Row justify={"space-between"}>
            <Col xs={10} sm={10} md={10} lg={12} xl={12}>
              {/* <Card title="Card Title">
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                  Content
                </Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
              </Card> */}
            </Col>{" "}
            {/* <Col xs={10} sm={14} md={14} lg={12} xl={12}>
              <BarChart />
            </Col> */}
            <Col
              style={{ marginTop: "5%" }}
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
            >
             

              <Card title="Dashboard">
                <Card.Grid style={gridStyle}><Card
                style={{ width: 300 , height: 300}}
                cover={
                  <img
                    alt="example"
                    src="https://www.safetysupplywarehouse.com/v/vspfiles/photos/HHD-39-2T.jpg"
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                
                <Meta
                  avatar={
                    <Avatar src="https://inspirationfeed.com/wp-content/uploads/2020/01/chesser-800x561.jpg" />
                  }
                  // title="Visitors"
                  // description="This is the description"
                />
              </Card></Card.Grid>
                <Card.Grid hoverable={false} style={gridStyle}>
                <Card
                style={{ width: 300, height: 300}}
                cover={
                  <img
                    alt="example"
                    src="https://www.cityofnewportrichey.org/wp-content/uploads/2018/02/Events.gif"
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://inspirationfeed.com/wp-content/uploads/2020/01/chesser-800x561.jpg" />
                  }
                  title="Manage Events"
                  // description="This is the description"
                />
              </Card>
                </Card.Grid>
                {/* <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid> */}
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default Home;
