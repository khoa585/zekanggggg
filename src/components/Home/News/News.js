import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss'
import Moment from 'react-moment';
function News(props) {
    const List = props[0]
    const indexList = List.length;
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
            <Container className="distant_">
                <Row>
                    <Col lg={6} md={6} sm={6} xs={6} className="dest_0">
                        <div className="dest_1">
                            <img src={List[indexList-1].image} alt="" className="img-fluid" />
                            <div className="overlay">
                                <div className="overlayBottom">
                                    <div className="date">
                                        <span><Moment format="DD/MM/YYYY" date={List[indexList-1].createdAt} /></span>
                                    </div>
                                    <div className="text">
                                        <span>{List[indexList-1].title}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dest_2">
                            <img src={List[indexList-2].image} alt="" className="img-fluid" />
                            <div className="overlay">
                                <div className="overlayBottom">
                                    <div className="date">
                                        <span><Moment format="DD/MM/YYYY" date={List[indexList-2].createdAt} /></span>
                                    </div>
                                    <div className="text">
                                        <span>{List[indexList-2].title}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6} className="dest_0">
                        <div className="dest_3">
                            <img src={List[indexList-3].image} alt="" className="img-fluid" />
                            <div className="overlay">
                                <div className="overlayBottom">
                                    <div className="date">
                                        <span><Moment format="DD/MM/YYYY" date={List[indexList-3].createdAt} /></span>
                                    </div>
                                    <div className="text">
                                        <span>{List[indexList-3].title}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dest_4">
                            <img src={List[indexList-4].image} alt="" className="img-fluid" />
                            <div className="overlay">
                                <div className="overlayBottom">
                                    <div className="date">
                                        <span><Moment format="DD/MM/YYYY" date={List[indexList-4].createdAt} /></span>
                                    </div>
                                    <div className="text">
                                        <span>{List[indexList-4].title}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
                <div className="showdes">
                    <button className="btn_new_1 btn_new_2">xem Thêm</button>
                </div>
            </Container>
            <div className="distant"></div>
        </React.Fragment>
    );
}

export default News;