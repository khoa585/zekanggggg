import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillStarFill } from "react-icons/bs";
import './style.scss'
function ProductItem(props) {
    return (
        <Container >
            <style jsx>
                {
                    `.content-text span::after{
                        content: url('/img/tree.png');
                        position: absolute;
                        top: -60%;
                        right: -2%;
                    }
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
            <div className="distant"></div>
            <div>
                <div className="content-text">
                    <div>
                        <h6>zekang is the best choice</h6>
                    </div>
                    <div>
                        <span>Bộ sản phẩm chăm sóc toàn diện cho da của bạn</span>
                    </div>
                </div>
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
            </div>
            <div className="distant"></div>
            <div>
                <div className="content-text">
                    <div>
                        <h6>ĐIỂM KHÁC BIỆT CỦA ZEKANG</h6>
                    </div>
                    <div>
                        <span>So với những sản phẩm khác trên thị trường</span>
                    </div>
                </div>
                <Row>
                    <Col lg={3} xl={3} md={3} sm={3} className="resp">
                        <div className="image-box-wrap">
                            <div className="thumb-wrap">
                                <div className="thumb-img-wrap">
                                    <img src="../img/img_1.png" alt="pro_1" className="img-fluid d-block mx-auto" />
                                </div>
                                <div className="distant_wrap">
                                    <span className="desc_Name">Thích hợp với<br />mọi loại da</span>
                                </div>
                            </div>
                            <div className="meta-inner-wrap distant_wrap">
                                <span className="desc">Zekang là sản phẩm phù hợp với mọi loại da được nghiên cứu và phát triển sản phẩm bởi các Tiến sĩ và Bác sĩ đầu ngành về Da liễu. </span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} xl={3} md={3} sm={3} className="resp">
                        <div className="image-box-wrap">
                            <div className="thumb-wrap">
                                <div className="thumb-img-wrap">
                                    <img src="../img/clover.png" alt="pro_1" className="img-fluid d-block mx-auto" />
                                </div>
                                <div className="distant_wrap">
                                    <span className="desc_Name">100% từ nguyên liệu<br />thiên nhiên</span>
                                </div>
                            </div>
                            <div className="meta-inner-wrap distant_wrap">
                                <span className="desc">Zekang là sản phẩm được điều chế từ nguồn nguyên liệu sạch, hoàn toàn có nguồn gốc từ thảo mộc thiên nhiên. </span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} xl={3} md={3} sm={3} className="resp">
                        <div className="image-box-wrap">
                            <div className="thumb-wrap">
                                <div className="thumb-img-wrap">
                                    <img src="../img/teams.png" alt="pro_1" className="img-fluid d-block mx-auto" />
                                </div>
                                <div className="distant_wrap">
                                    <span className="desc_Name">Sứ mệnh là sức khỏe<br></br>con người</span>
                                </div>
                            </div>
                            <div className="meta-inner-wrap distant_wrap">
                                <span className="desc">Các sản phẩm của Zekang được giám sát, theo dõi chất lượng nghiêm ngặt, khắt khe nhất tại các tổ chức khoa học trong và ngoài nước. </span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} xl={3} md={3} sm={3} className="resp">
                        <div className="image-box-wrap">
                            <div className="thumb-wrap">
                                <div className="thumb-img-wrap">
                                    <img src="../img/box.png" alt="pro_1" className="img-fluid d-block mx-auto" />
                                </div>
                                <div className="distant_wrap">
                                    <span className="desc_Name">Sản phẩm được<br />yêu thích nhất</span>
                                </div>
                            </div>
                            <div className="meta-inner-wrap distant_wrap">
                                <span className="desc">Zekang đã đạt doanh số hàng năm hơn 2 triệu sản phẩm và là sản phẩm được yêu thích nhất tại Singapore, Trung Quốc …</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="distant"></div>
            <div>
                <div className="content-text">
                    <div>
                        <h6>PHẢN HỒI CỦA KHÁCH HÀNG</h6>
                    </div>
                    <div>
                        <span>Khi sử dụng sản phẩm của ZeKang</span>
                    </div>
                </div>
                <Row className="">
                    <Col lg={3} xl={3} md={3} sm={3} className="resp">
                        <div className="image-box-wrap_">
                            <div className="thumb-img-wrap_">
                                <img src="../img/img_2.png" alt="pro_1" className="img-fluid d-block mx-auto" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} xl={3} md={3} sm={3} className="resp">
                        <div className="image-box-wrap_" >
                            <div className="thumb-img-wrap_">
                                <img src="../img/img_2.png" alt="pro_1" className="img-fluid d-block mx-auto" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} xl={3} md={3} sm={3} className="resp">
                        <div className="image-box-wrap_">
                            <div className="thumb-img-wrap_">
                                <img src="../img/img_2.png" alt="pro_1" className="img-fluid d-block mx-auto" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} xl={3} md={3} sm={3} className="resp">
                        <div className="image-box-wrap_">
                            <div className="thumb-img-wrap_">
                                <img src="../img/img_2.png" alt="pro_1" className="img-fluid d-block mx-auto" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default ProductItem;