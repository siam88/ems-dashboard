import React, { Component, Fragment } from "react";
import { Layout, Menu } from "antd";
import "./sideNavBar.css";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import routes from "../../../routes/routes";
const { SubMenu } = Menu;
const { Sider } = Layout;

class SideNavBar extends Component {
  render() {
    const navItems = (
      <Fragment>
        {routes.map((item) => {
          return (
            <SubMenu key={item.name} icon={item.icon} title={item.name}>
              {item.subRoutes.map((childItem) => {
                return (
                  <Menu.Item key={childItem.name} icon={childItem.icon}>
                    <NavLink to={childItem.path}>{childItem.name}</NavLink>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        })}
      </Fragment>
    );

    return (
      <Sider
        width={200}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["Dashboard"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          {navItems}
        </Menu>
      </Sider>
    );
  }
}

export default SideNavBar;
