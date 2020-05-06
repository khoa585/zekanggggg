import React ,{useState} from 'react';
import './DashBoard.scss'
import {Layout,Menu} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    PlusCircleOutlined 
  } from '@ant-design/icons';
const {Content,Header,Sider} = Layout ;
const {SubMenu} = Menu ;
function DashBoard(props){
    const [collapsed,setCollapsed] = useState(false);
    const [breakpoint,setBreakpoint] =useState(90);
    const toogle = ()=>{
        setCollapsed(!collapsed);
    }
    return (
        <Layout >
            <Sider trigger={null} collapsible collapsed={collapsed} breakpoint="lg" collapsedWidth={breakpoint} width={250}
                onBreakpoint={broken => {
                    if(broken){
                        setBreakpoint(0)
                    }else{
                        setBreakpoint(80)
                    }
                }}
                style={{minHeight:"100%"}}
                >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <SubMenu icon={<UserOutlined />} title={"Sản Phẩm"}>
                        <Menu.Item key="1" icon={<PlusCircleOutlined />}>Danh Sách Sản Phẩm</Menu.Item>
                        <Menu.Item key="2" icon={<PlusCircleOutlined />}>Thêm Sản Phẩm</Menu.Item>
                    </SubMenu>
                    <SubMenu icon={<UserOutlined />} title={"Tin Tức"}>
                        <Menu.Item key="3" icon={<PlusCircleOutlined />}>Danh Sách Tin Tức</Menu.Item>
                        <Menu.Item key="4" icon={<PlusCircleOutlined />}>Thêm Tin Tức</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick:toogle
                })}
            </Header>
            <Content
                className="site-layout-background"
                style={{
                margin: '24px 16px',
                padding: 24,
                minHeight:1000
                }}
                >
                {props.children}
            </Content>
        </Layout>
        </Layout>
    )
}
export default DashBoard ;