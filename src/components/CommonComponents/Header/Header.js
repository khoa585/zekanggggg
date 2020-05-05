import React, { useState } from 'react';
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BsSearch, BsX } from "react-icons/bs"
import './Header.scss';
import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link'
import ContactFast from '../ContactFast/ContactFast';
function Header(props) {
    const router = useRouter()
    const pathname = router.pathname;
    const [state, setstate] = useState(pathname)
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
                                        <Link href="/" as="/"><li className="menu-item " className={`menu-item ${state === '/' ? 'active' : ''}`}>Trang Chủ</li></Link>
                                        <Link href="/introduces" as="/gioi-thieu"><li className={`menu-item ${state === '/introduces' ? 'active' : ''}`}>Giới Thiệu</li></Link>
                                        <Link href="/descproducts" as="/chi-tiet"><li className={`menu-item ${state === '/descproducts' ? 'active' : ''}`}>Sản Phẩm</li></Link>
                                        <Link href="/experopinion" as="/y-kien-chuyen-gia"><li className={`menu-item ${state === '/experopinion' ? 'active' : ''}`}>Ý Kiến Chuyên Gia</li></Link>
                                        <Link href="/news" as="/tin-tuc"><li className={`menu-item ${state === '/news' ? 'active' : ''}`}>Tin Tức</li></Link>
                                        <Link href="/contact" as="/lien-he"><li className={`menu-item ${state === '/contact' ? 'active' : ''}`}>Liên Hệ</li></Link>
                                        <li className="menu-item"><BsSearch></BsSearch></li>
                                    </ul>
                                </nav>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
            <ContactFast></ContactFast>
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