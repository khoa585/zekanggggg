import React, { useState } from 'react';
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BsSearch, BsX } from "react-icons/bs"
import './Header.scss';
import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link'
import ContactFast from '../ContactFast/ContactFast';
import BackToTop from '../BackToTop/BackToTop';
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
                                    <Link href="/" as="/"><img src="../img/logo.png" alt="cover" className="img-fluid" /></Link>
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
                                        <Link href="/products" as="/san-pham"><li className={`menu-item ${state === '/products' ? 'active' : ''}`}>Sản Phẩm</li></Link>
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
            <BackToTop></BackToTop>
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
                                <Link href="/" as="/">
                                    <span>Trang Chủ</span>
                                </Link>
                            </li>
                            <li className="navItem">
                                <Link href="/introduces" as="/gioi-thieu">
                                    <span>Giới Thiệu</span>
                                </Link>
                            </li>
                            <li className="navItem">
                                <Link href="/products" as="/san-pham">
                                    <span>Sản Phẩm</span>
                                </Link>
                            </li>
                            <li className="navItem">
                                <Link href="/experopinion" as="/y-kien-chuyen-gia">
                                    <span>Ý Kiến Chuyên Gia</span>
                                </Link>
                            </li>
                            <li className="navItem">
                                <Link href="/news" as="/tin-tuc">
                                    <span>Tin Tức</span>
                                </Link>
                            </li>
                            <li className="navItem">
                                <Link href="/contact" as="/lien-he">
                                    <span>Liên Hệ</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Header;