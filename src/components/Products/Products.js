import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillStarFill } from "react-icons/bs";
import '../Home/ProductItem/style.scss'
function Products(props) {
    return (
        <React.Fragment>
            <div className="distant___"></div>
            <Container>
                <div className="title-wrap">
                    <span className="title-wrap-home">Home</span>
                    <span className="title-wrap-product">Sản Phẩm </span>
                </div>
                <div className="distant___"></div>
                <Row>
                    <Col lg={3} md={3} sm={3} className="resp">
                        <div className="image-box is-trending has-discount">
                            <div className="thumb">
                                <div className="thumbPai">
                                </div>
                                <div className="thumb-img-first">
                                </div>
                            </div>
                            <div className="meta-inner">
                                <div className="nameProduct"><h6>Bacteriostatic Shower Gel</h6></div>
                                <div className="formatProduct">
                                    <div>
                                        <span className="price">150.000 đ</span>
                                    </div>
                                    <div>
                                        <span className="star"><BsFillStarFill></BsFillStarFill><BsFillStarFill></BsFillStarFill><BsFillStarFill></BsFillStarFill><BsFillStarFill></BsFillStarFill><BsFillStarFill></BsFillStarFill></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={3} className="resp">
                        <div className="image-box is-trending has-discount">
                            <div className="thumb">
                                <div className="thumbPai">
                                </div>
                                <div className="thumb-img-first">
                                </div>
                            </div>
                            <div className="meta-inner">
                                <div className="nameProduct"><h6>Allantoin VE Ointment</h6></div>
                                <div className="formatProduct">
                                    <div>
                                        <span className="price">150.000 đ</span>
                                    </div>
                                    <div>
                                        <span className="star"><BsFillStarFill></BsFillStarFill><BsFillStarFill></BsFillStarFill><BsFillStarFill></BsFillStarFill><BsFillStarFill></BsFillStarFill><BsFillStarFill></BsFillStarFill></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={3} className="resp">
                        <div className="image-box is-trending has-discount">
                            <div className="thumb">
                                <div className="thumbPai">
                                </div>
                                <div className="thumb-img-first">
                                </div>
                            </div>
                            <div className="meta-inner">
                                <div className="nameProduct"><h6>Black Bean Distillate Oil</h6></div>
                                <div className="formatProduct">
                                    <div>
                                        <span className="price">150.000 đ</span>
                                    </div>
                                    <div>
                                        <span className="star"><BsFillStarFill></BsFillStarFill><BsFillStarFill></BsFillStarFill><BsFillStarFill></BsFillStarFill><BsFillStarFill></BsFillStarFill><BsFillStarFill></BsFillStarFill></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={3} sm={3} className="resp">
                        <div className="image-box is-trending has-discount">
                            <div className="thumb">
                                <div className="thumbPai">
                                </div>
                                <div className="thumb-img-first">
                                </div>
                            </div>
                            <div className="meta-inner">
                                <div className="nameProduct"><h6>Bacteriostatic Shower Gel</h6></div>
                                <div className="formatProduct">
                                    <div>
                                        <span className="price">150.000 đ</span>
                                    </div>
                                    <div>
                                        <span className="star"><BsFillStarFill></BsFillStarFill><BsFillStarFill></BsFillStarFill><BsFillStarFill></BsFillStarFill><BsFillStarFill></BsFillStarFill><BsFillStarFill></BsFillStarFill></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="distant___"></div>
            <style jsx>
                {
                    `
                    .thumbPai{
                        background-image: url(../img/pro_2.png);
                        height: 100%;
                        width: 100%;
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                    }
                    .thumb-img-first{
                        background-image: url(../img/products_2.jpg);
                        height: 100%;
                        width: 100%;
                        background-position: center;
                        background-size: cover;
                        position: absolute;
                        top: 0;
                        background-repeat: no-repeat;
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
}

export default Products;