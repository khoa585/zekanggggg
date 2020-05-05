import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss'
import '../Home/ProductItem/style.scss'
import { BsFillStarFill } from "react-icons/bs";
function Newsz(props) {
    return (
        <React.Fragment>
            <div className="distant_news"></div>
            <Container>
                <div className="title-wrap-news">
                    <span className="title-wrap-home-news">Home</span>
                    <span className="title-wrap-news">Tin tức </span>
                </div>
                <div className="distant_news_0"></div>
                <div className="gallery-item-news">
                    <div className="img-content-news">
                    </div>
                    <div className="text-wrapper-news">
                        <div className="text-box-news"></div>
                        <div className="text-wrap-box-news">
                            <div className="text-wrap-context-news">
                                <div className="news-opg">
                                    <h4 className="titleWow-news">Hội nghị Da liễu Đông dương mở rộng và Hội nghị Da liễu cấp cao thế giới lần đầu tiên được tổ chức tại Hà Nội</h4>
                                    <span>12/04/2020</span>
                                </div>
                                <p>VTV1 - Lần đầu tiên một hội nghị da liễu quốc tế được tổ chức tại Hà nội do Bệnh viện Da liễu Trung ương chủ trì với sự tham gia của gần 1000 gần chuyên gia da liễu trên thế giới.</p>
                                <button className="btn-news btn-news_">xem chi tiết</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="distant_news-1"></div>
                    <Row className="padding-news-note">
                        <Col lg={5} md={5} sm={5} xs={5}>
                            <div className="img-news-0">
                                <img src="../img/note_1.jpg" alt="" className="img-fluid d-block mx-auto"></img>
                            </div>
                        </Col>
                        <Col lg={7} md={7} sm={7} xs={7}>
                            <div className="img-news-1">
                                <h4>10 lưu ý không thể bỏ qua để sống chung với bệnh vẩy nến</h4>
                                <p>VTV1 - Lần đầu tiên một hội nghị da liễu quốc tế được tổ chức tại Hà nội do Bệnh viện Da liễu Trung ương chủ trì với sự tham gia của gần 1000 gần chuyên gia da liễu trên thế giới.</p>
                                <button className="btn-news-0 btn-news_0">xem chi tiết</button>
                            </div>
                        </Col>
                    </Row>
                    <div className="distant_news-1"></div>
                    <Row className="padding-news-note">
                    <Col lg={5} md={5} sm={5} xs={5}>
                            <div className="img-news-0">
                                <img src="../img/note_2.jpg" alt="" className="img-fluid d-block mx-auto"></img>
                            </div>
                        </Col>
                        <Col lg={7} md={7} sm={7} xs={7}>
                            <div className="img-news-1">
                                <h4>Mẹo trị vảy nến bằng lá trầu không – ai nên dùng?</h4>
                                <p>VTV1 - Lần đầu tiên một hội nghị da liễu quốc tế được tổ chức tại Hà nội do Bệnh viện Da liễu Trung ương chủ trì với sự tham gia của gần 1000 gần chuyên gia da liễu trên thế giới.</p>
                                <button className="btn-news-0 btn-news_0">xem chi tiết</button>
                            </div>
                        </Col>
                    </Row>
                    <div className="distant_news-1"></div>
                    <Row className="padding-news-note">
                    <Col lg={5} md={5} sm={5} xs={5}>
                            <div className="img-news-0">
                                <img src="../img/note_4.jpg" alt="" className="img-fluid d-block mx-auto"></img>
                            </div>
                        </Col>
                        <Col lg={7} md={7} sm={7} xs={7}>
                            <div className="img-news-1">
                                <h4>Sống vô tư với bệnh vẩy nến</h4>
                                <p>VTV1 - Lần đầu tiên một hội nghị da liễu quốc tế được tổ chức tại Hà nội do Bệnh viện Da liễu Trung ương chủ trì với sự tham gia của gần 1000 gần chuyên gia da liễu trên thế giới.</p>
                                <button className="btn-news-0 btn-news_0">xem chi tiết</button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="distant_news-2"></div>
                <div>
                    <span className="title-opg">các sản phẩm bạn có thể quan tâm</span>
                    <div className="distant_news-1"></div>
                    <Row>
                    <Col lg={3} md={3} sm={3} className="resp">
                        <div className="image-box is-trending has-discount">
                            <div className="thumb">
                                <div className="thumbPai">
                                    <div className="thumb-img-first">
                                        <img src="../img/pro_1.png" alt="pro_1" className="img-fluid d-block mx-auto hover-img-block" />
                                    </div>
                                    <img src="../img/products_2.jpg" alt="pro_1" className="img-fluid d-block mx-auto hover-img" />
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
                                    <div className="thumb-img-first">
                                        <img src="../img/pro_2.png" alt="pro_1" className="img-fluid d-block mx-auto hover-img-block" />
                                    </div>
                                    <img src="../img/products_2.jpg" alt="pro_1" className="img-fluid d-block mx-auto hover-img" />
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
                                    <div className="thumb-img-first">
                                        <img src="../img/pro_3.png" alt="pro_1" className="img-fluid d-block mx-auto hover-img-block" />
                                    </div>
                                    <img src="../img/products_2.jpg" alt="pro_1" className="img-fluid d-block mx-auto hover-img" />
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
                                    <div className="thumb-img-first">
                                        <img src="../img/pro_4.png" alt="pro_1" className="img-fluid d-block mx-auto hover-img-block" />
                                    </div>
                                    <img src="../img/products_2.jpg" alt="pro_1" className="img-fluid d-block mx-auto hover-img" />
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
            </Container>
            <div className="distant_news"></div>
            <style jsx>{`
           .img-content-news{
            background-image: url(../img/news.jpg);
            height: 100%;
            width: 55%;
            background-position: center;
            background-size: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            left: 0;
        }
            `}</style>
        </React.Fragment>
    );
}

export default Newsz;