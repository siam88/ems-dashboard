import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import SideNavBar from '../../components/Navigation/SideNavBar/sideNavBar.jsx';
import TopNavBar from '../../components/Navigation/TopNavBar/topNavBar.jsx';
import './layout.css';


const {  Content, Footer,  } = Layout;
class LayoutComponent extends Component {

    render() {
        return (
            <Layout>
                <TopNavBar />
                <Layout>
                    <SideNavBar />
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                            style={{
                                margin: '16px 0',
                                minHeight: '82vh',
                            }}
                        >
                            <div className="site-layout-content"> {this.props.children}</div>
                        </Content>
                    </Layout>
                </Layout>
                <Footer style={{ textAlign: 'center' }}>All right reserves ©2021 by IFTI</Footer>
            </Layout>
        )
    }
}

export default LayoutComponent;