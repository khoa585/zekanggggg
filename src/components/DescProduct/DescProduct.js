import React, { useReducer } from 'react';
import './style.scss';
import '../Home/ProductItem/style.scss'
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillStarFill } from "react-icons/bs";
import Link from 'next/link';
const initialState = { evenKey0: false, evenKey1: false, evenKey2: false, evenKey3: false, evenKey4: false, evenKey5: false };
function reducer(state, action) {
    switch (action.type) {
        case '1':
            return { evenKey0: !state.evenKey0 };
        case '2':
            return { evenKey1: !state.evenKey1 };
        case '3':
            return { evenKey2: !state.evenKey2 };
        case '4':
            return { evenKey3: !state.evenKey3 };
        case '5':
            return { evenKey4: !state.evenKey4 };
        case '6':
            return { evenKey5: !state.evenKey5 };
        default:
            throw new Error();
    }
}
function DescProduct(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <React.Fragment>
            <div className="distant___"></div>
            <Container>
                <div className="title-wrap">
                    <span className="title-wrap-home">Home</span>
                    <span className="title-wrap-nameproduct">Sản Phẩm </span>
                    <span>VITAMIN E – Alantoin VE Ointment</span>
                </div>
                <div className="distant___"></div>
                <div>
                    <Row>
                        <Col lg={8} md={8} sm={8} xs={8} className="desc-pro-col">
                            <Row>
                                <Col lg={5} md={5} sm={5} xs={5} className="desc_Prod_1">
                                    <div className="desc-img-1">
                                        <img src="../img/products_1.JPG" alt="products_1" className="img-fluid" />
                                    </div>
                                    <div className="desc-img-2">
                                        <img src="../img/products_2.jpg" alt="products_2" className="img-fluid" />
                                    </div>
                                </Col>
                                <Col lg={7} md={7} sm={7} xs={7} className="desc_Prod_2">
                                    <div className="desc-img-3">
                                        <img src="../img/products_3.png" alt="products_3" className="img-fluid" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6} md={6} sm={6} xs={6} className="desc_Prod_3">
                                    <div className="desc-img-4">
                                        <img src="../img/products_4.jpg" alt="products_4" className="img-fluid" />
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={6} xs={6} className="desc_Prod_4">
                                    <div className="desc-img-5">
                                        <img src="../img/products_5.jpg" alt="products_5" className="img-fluid" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={4} md={4} sm={4} xs={4} className="desc-pro-col">
                            <div className="desc-product">
                                <div className="title-desc-prod">
                                    <h6>VITAMIN E  Alantoin VE Ointment</h6>
                                    <span>$13.99</span>
                                </div>
                                <div className="title-infor-prod">
                                    <p>VITAMIN E – Alantoin VE Ointment là một loại hỗn hợp dưỡng ẩm giúp cân bằng độ ẩm, chống oxy hóa, phục hồi và tái tạo da bị tổn thương do các bệnh lý viêm da cơ địa, vảy nến gây nên. Alantoin VE Ointment là sản phẩm kết hợp tuyệt vời từ VITAMIN E và các loại thảo dược quý như Allantoin (thành phần chính trong cây Comfrey), long não đại bi ...</p>
                                    <p>Sản phẩm không chứa thành phần chất gây hại, chất bảo quản và Corticoste-roid. Đặc biệt hữu ích cho người bị viêm da cơ địa, người bị khô ngứa da, vảy nến và diệt khuẩn giúp thúc đẩy quá trình tái tạo lại làn da tổn thương, chống viêm, chống oxy hóa ngăn ngừa quá trình lão hóa da. Thành phần tự nhiên giúp sản phẩm phù hợp với mọi loại da.mọi loại da.</p>
                                </div>
                                <div className="accordion-prod">
                                    <div>
                                        <button onClick={() => dispatch({ type: '1' })} className={`accordion ${state.evenKey0 ? 'actives' : ''}`}>Thành phần</button>
                                        <div className={`panel ${state.evenKey0 ? 'panel_0' : ''}`}>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => dispatch({ type: '2' })} className={`accordion ${state.evenKey1 ? 'actives' : ''}`}>cách sử dụng</button>
                                        <div className={`panel ${state.evenKey1 ? 'panel_0' : ''}`}>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => dispatch({ type: '3' })} className={`accordion ${state.evenKey2 ? 'actives' : ''}`}>lưu ý</button>
                                        <div className={`panel ${state.evenKey2 ? 'panel_0' : ''}`}>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => dispatch({ type: '4' })} className={`accordion ${state.evenKey3 ? 'actives' : ''}`}>hàm lượng & hạn sử dụng</button>
                                        <div className={`panel ${state.evenKey3 ? 'panel_0' : ''}`}>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => dispatch({ type: '5' })} className={`accordion ${state.evenKey4 ? 'actives' : ''}`}>đánh giá của khách hàng</button>
                                        <div className={`panel ${state.evenKey4 ? 'panel_0' : ''}`}>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => dispatch({ type: '6' })} className={`accordion ${state.evenKey5 ? 'actives' : ''}`}>HƯỚNG DẪN MUA HÀNG</button>
                                        <div className={`panel ${state.evenKey5 ? 'panel_0' : ''}`}>
                                            <p>Quý khách có thể mua sản phẩm ZeKang theo 3 phương thức sau:</p>
                                            <p>1. Truy cập vào website http://zekang.com.vn để tham khảo, lựa chọn sản phẩm cần mua và đặt hàng</p>
                                            <p>2. Gọi điện trực tiếp đến chúng tôi thông qua số Hotline: 0914 479 866 hay số cố định 024 2284 9090 để được tư vấn mua hàng</p>
                                            <p>3. Liên hệ các đại lý phân phối gần nhất của chúng tôi để được tư vấn và đặt hàng. Tìm địa chỉ mua hàng gần nhất tại đây</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="distant___"></div>
                <div>
                    <span className="title-opg">các sản phẩm liên quan khác</span>
                    <div className="distant___"></div>
                    <Row>
                        <Link href="/descproducts" as="/chi-tiet">
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
                        </Link>
                        <Link href="/descproducts" as="/chi-tiet">
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
                        </Link>
                        <Link href="/descproducts" as="/chi-tiet">
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
                        </Link>
                        <Link href="/descproducts" as="/chi-tiet">
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
                        </Link>
                    </Row>
                </div>
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

export default DescProduct;