import React, { useState } from 'react';
import './style.scss';
import { useRouter } from 'next/router'
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    SendOutlined,
} from '@ant-design/icons';
import { Dropdown, Avatar } from 'antd';
import Link from 'next/link'
const { Content, Header, Sider } = Layout;
const { SubMenu } = Menu;
const menu = (
    <Menu>
        <Menu.Item>
                <UserOutlined/> log out
        </Menu.Item>
    </Menu>
);
function DashBoard(props) {
    const [collapsed, setCollapsed] = useState(false);
    const [breakpoint, setBreakpoint] = useState(90);
    const toogle = () => {
        setCollapsed(!collapsed);
    }
    const router = useRouter()
    return (
        <Layout >
            <Sider trigger={null} collapsible collapsed={collapsed} breakpoint="lg" collapsedWidth={breakpoint} width={250}
                onBreakpoint={broken => {
                    if (broken) {
                        setBreakpoint(0)
                    } else {
                        setBreakpoint(80)
                    }
                }}
                style={{ minHeight: "100%" }}
            >
                <div className="logo">
                    <Link href="/" as="/"><img src="../../img/logo.png" alt="cover" className="img-fluid" /></Link>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={({ key }) => { router.push(key) }}>
                    <SubMenu icon={<UserOutlined />} title={"Sản Phẩm"} key={"1"}>
                        <Menu.Item icon={<SendOutlined />} key="/admin/product">
                            Danh Sách Sản Phẩm
                        </Menu.Item>
                        <Menu.Item key="/admin/product/add" icon={<SendOutlined />}>Thêm Sản Phẩm</Menu.Item>
                    </SubMenu>
                    <SubMenu icon={<UserOutlined />} title={"Tin Tức"}>
                        <Menu.Item key="/admin/news" icon={<SendOutlined />}>Danh Sách Tin Tức</Menu.Item>
                        <Menu.Item key="/admin/news/add" icon={<SendOutlined />}>Thêm Tin Tức</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toogle
                    })}
                    <Dropdown overlay={menu} className="triggers">
                        <Avatar icon={<UserOutlined />} />
                    </Dropdown>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 1000
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    )
}
export default DashBoard;