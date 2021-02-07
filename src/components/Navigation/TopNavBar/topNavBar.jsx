import React, { Component } from "react";
import { Layout, Menu, Image } from "antd";
import {
  UserOutlined,
  SyncOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

import "./topNavBar.css";
import logo from "../../../assets/logo/logo.png";

const { SubMenu } = Menu;
const { Header} = Layout;

class TopNavBar extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo">
            <Image src={logo} height={70} />
          </div>

          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[3]}
            style={{ float: "right" }}
          >
            <SubMenu icon={<UserOutlined />} title="Admin">
            <Menu.Item key="MyProfile" icon={<UserOutlined />}>
              My Profile
            </Menu.Item>
            <Menu.Item key="ChangePassword" icon={<SyncOutlined />}>
             Change Password
            </Menu.Item>
            <Menu.Item key="Logout" icon={<LogoutOutlined />}>
              Logout
            </Menu.Item>
            </SubMenu>
            
          </Menu>
        </Header>
      </Layout>
    );
  }
}

export default TopNavBar;
