import React, { useState } from 'react';
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BsSearch, BsX } from "react-icons/bs"
import './style/Header.scss';
import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link'
function Header(props) {
    const router = useRouter()
    const pathname = router.pathname;
    const menu = [
        {
            val: 'Trang Chủ',
            URl: '/'
        },
        {
            val: 'Giới Thiệu',
            URl: '/introduces',
            rewrite: "/gioi-thieu"
        },
        {
            val: 'Sản Phẩm',
            URl: '/DescProducts'
        },
        {
            val: 'Ý Kiến Chuyên Gia',
            URl: ''
        },
        {
            val: 'Tin Tức',
            URl: '/News'
        },
        {
            val: 'Liên Hệ',
            URl: '/Lien-He'
        }
    ]
    const [state, setstate] = useState(pathname)
    // const activeMenu = (item) => {
    //     setstate(item)
    // }
    const [stateIcon, setstateIcon] = useState(false)
    const showMenu = (open) => {
        setstateIcon(!open)
    }
    return (
        <div className="header">
            <style jsx>{`
            .active::after{
                content: url('../img/tree.png');
                position: absolute;
                top: 15px;
                right: 0px;
            }
            `}</style>
            <header id="site-header" className="header_topBar">
                <Container className="header-top">
                    <Row className="header">
                        <Col lg={3} md={3} sm={3} >
                            <div id="site-logo" className="clearFix">
                                <div className="site-logo-inner">
                                    <a href=" " title="Logo" className="main-logo">
                                        <img src="../img/logo.png" alt="cover" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={9} md={9} sm={9}>
                            <div className="wrap_nav">
                                <nav id="main-nav" className="main-nav">
                                    <ul id="menu-primary-menu" className="menu">
                                        {/* {
                                            menu.map((item, index) => {
                                                return <li key={index} onClick={() => activeMenu(item.val)} className={`menu-item ${state === item.URl ? 'active' : ''} `}>
                                                    <Link href={item.URl} as={item.rewrite}><span>{item.val}</span></Link>
                                                </li>
                                            })
                                        } */}
                                        <Link href="/" as="/"><li className="menu-item " className={`menu-item ${state === '/' ? 'active' : ''}`}>Trang Chủ</li></Link>
                                        <Link href="/introduces" as="/gioi-thieu"><li className={`menu-item ${state === '/introduces' ? 'active' : ''}`}>Giới Thiệu</li></Link>
                                        <Link href="/DescProducts" as="/chi-tiet"><li className={`menu-item ${state === '/DescProducts' ? 'active' : ''}`}>Sản Phẩm</li></Link>
                                        <Link href="/" as="/"><li className={`menu-item ${state === '/' ? 'active' : ''}`}>Ý Kiến Chuyên Gia</li></Link>
                                        <Link href="/News" as="/tin-tuc"><li className={`menu-item ${state === '/News' ? 'active' : ''}`}>Tin Tức</li></Link>
                                        <Link href="/Contact" as="/Lien-He"><li className={`menu-item ${state === '/Contact' ? 'active' : ''}`}>Liên Hệ</li></Link>
                                    </ul>
                                </nav>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
            <header className="header-top_">
                <Container>
                    <Row>
                        <Col xs={4} className="DragHandle_Icon">
                            <div className="DragHandleIcon">
                                {stateIcon === false ? <AiOutlineMenu onClick={() => showMenu(stateIcon)}></AiOutlineMenu> : <BsX onClick={() => showMenu(stateIcon)}></BsX>}
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div className="logoR">
                                <img src="../img/logo.png" alt="cover" className="img-fluid d-block mx-auto" />
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div className="iconR">
                                <BsSearch />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className={`sidenav ${stateIcon ? 'mySidenav' : 'closeSidenav'}`}>
                    <nav className="navigation">
                        <ul className="navR">
                            <li className="navItem">
                                <a href=" " className="heading">
                                    <span>Trang Chủ</span>
                                </a>
                            </li>
                            <li className="navItem">
                                <a href=" " className="heading">
                                    <span>Giới Thiệu</span>
                                </a>
                            </li>
                            <li className="navItem">
                                <a href=" " className="heading">
                                    <span>Sản Phẩm</span>
                                </a>
                            </li>
                            <li className="navItem">
                                <a href=" " className="heading">
                                    <span>Ý Kiến Chuyên Gia</span>
                                </a>
                            </li>
                            <li className="navItem">
                                <a href=" " className="heading">
                                    <span>Tin Tức</span>
                                </a>
                            </li>
                            <li className="navItem">
                                <a href=" " className="heading">
                                    <span>Liên Hệ</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Header;