import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss'
function News(props) {
    return (
        <React.Fragment>
            <div className="distant"></div>
            <div className="content-text news">
                <div>
                    <h6>tin tức & các thông tin liên quan</h6>
                </div>
                <div>
                    <span>Khi sử dụng sản phẩm của ZeKang</span>
                </div>
            </div>
            <Container  className="distant_">
                <Row>
                    <Col lg={6} md={6} sm={6} xs={6} className="dest_0">
                        <div className="dest_1">
                            <img src="../img/product_5.png" alt="" className="img-fluid" />
                            <div className="overlay">
                                <div className="overlayBottom">
                                    <div className="text">
                                        <span>Bộ sản phẩm mới chữa trị bệnh vẩy nên hiệu quả</span>
                                    </div>
                                    <div className="date">
                                        <span>04/04/2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dest_2">
                            <img src="../img/product_8.png" alt="" className="img-fluid" />
                            <div className="overlay overlayText">
                                <div className="overlayBottom">
                                    <div className="text">
                                        <span>Hội nghị Da liễu Đông dương mở rộng và Hội nghị Da liễu cấp cao thế giới lần đầu tiên được tổ chức tại Hà Nội</span>
                                    </div>
                                    <div className="date">
                                        <span>12/04/2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}   className="dest_0">
                        <div className="dest_3">
                            <img src="../img/product_6.png" alt="" className="img-fluid" />
                            <div className="overlay">
                                <div className="overlayBottom">
                                    <div className="text">
                                        <span>Hiệu quả cao - Không tác dụng phụ</span>
                                    </div>
                                    <div className="date">
                                        <span>20/02/2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dest_4">
                            <img src="../img/product_7.png" alt="" className="img-fluid" />
                            <div className="overlay">
                                <div className="overlayBottom">
                                    <div className="text">
                                        <span>Zekang Shower Gel không chứa Corticosteroids</span>
                                    </div>
                                    <div className="date">
                                        <span>20/02/2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
                <div className="showdes">
                    <button className="btn btn_">xem Thêm</button>
                </div>
            </Container>
            <div className="distant"></div>
        </React.Fragment>
    );
}

export default News;