import React, { useReducer } from 'react';
import './style.scss';
import '../Home/ProductItem/style.scss'
import { Container, Row, Col } from 'react-bootstrap';
import { to_slug, formatStar } from '../../commons/index'
import { Link } from './../../../routers';
import reducer from '../../commons/reducer';
import CurrencyFormat from 'react-currency-format';
const initialState = { evenKey0: false, evenKey1: false, evenKey2: false, evenKey3: false, evenKey4: false, evenKey5: false };
function DescProduct(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { name, price, evaluation, heed, descriptions, usage, ingredients, expirydate, images } = props[0]
    const showProduct = () => {
        let result = props[1].map((task, index) => {
            return <Link route={`/san-pham/${to_slug(task.name)}.${task.id}`} key={index}>
                <Col lg={3} md={3} sm={3} className="resp" key={index}>
                    <div className="image-box is-trending has-discount">
                        <div className="thumb">
                            <div className="background-image">
                                <img src={task.images[0]} className="" className="img-fluid d-block mx-auto" />
                            </div>
                            <div className="background-image thumb-img-first secondary-image" >
                                <img src={task.images[1]} className="" className="img-fluid d-block mx-auto" />
                            </div>
                        </div>
                        <div className="meta-inner">
                            <div className="nameProduct"><h6>{task.name}</h6></div>
                            <div className="formatProduct">
                                <div>
                                    <span className="price"><CurrencyFormat value={task.price} displayType={'text'} thousandSeparator={true} />  đ</span>
                                </div>
                                <div>
                                    <span className="star">{formatStar(task.start)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Link>
        })
        return result;
    }
    return (
        <React.Fragment>
            <div className="distant___"></div>
            <Container>
                <div className="title-wrap">
                    <Link route="/"><span className="title-wrap-home">Home</span></Link>
                    <Link route="/san-pham"><span className="title-wrap-nameproduct">Sản Phẩm </span></Link>
                    <span className="title-wrap-nameProduct">{name}</span>
                </div>
                <div className="distant___"></div>
                <div>
                    <Row>
                        <Col lg={8} md={8} sm={8} xs={8} className="desc-pro-col">
                            <Row>
                                <Col lg={5} md={5} sm={5} xs={5} className="desc_Prod_1">
                                    <div className="desc-img-1">
                                        <img src={images[2]} alt="products_1" className="img-fluid" />
                                    </div>
                                    <div className="desc-img-2">
                                        <img src={images[3]} alt="products_2" className="img-fluid" />
                                    </div>
                                </Col>
                                <Col lg={7} md={7} sm={7} xs={7} className="desc_Prod_2">
                                    <div className="desc-img-3">
                                        <img src={images[4]} alt="products_3" className="img-fluid" />
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
                                    <h6>{name}</h6>
                                    <span><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} />  đ</span>
                                </div>
                                <div className="title-infor-prod">
                                    <p>{descriptions}</p>
                                </div>
                                <div className="accordion-prod">
                                    <div>
                                        <button onClick={() => dispatch({ type: '1' })} className={`accordion ${state.evenKey0 ? 'actives' : ''}`}>Thành phần</button>
                                        <div className={`panel ${state.evenKey0 ? 'panel_0' : ''}`}>
                                            <p>{ingredients}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => dispatch({ type: '2' })} className={`accordion ${state.evenKey1 ? 'actives' : ''}`}>cách sử dụng</button>
                                        <div className={`panel ${state.evenKey1 ? 'panel_0' : ''}`}>
                                            <p>{usage}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => dispatch({ type: '3' })} className={`accordion ${state.evenKey2 ? 'actives' : ''}`}>lưu ý</button>
                                        <div className={`panel ${state.evenKey2 ? 'panel_0' : ''}`}>
                                            <p>{heed}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => dispatch({ type: '4' })} className={`accordion ${state.evenKey3 ? 'actives' : ''}`}>hàm lượng & hạn sử dụng</button>
                                        <div className={`panel ${state.evenKey3 ? 'panel_0' : ''}`}>
                                            <p>{expirydate}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => dispatch({ type: '5' })} className={`accordion ${state.evenKey4 ? 'actives' : ''}`}>đánh giá của khách hàng</button>
                                        <div className={`panel ${state.evenKey4 ? 'panel_0' : ''}`}>
                                            <p>{evaluation}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => dispatch({ type: '6' })} className={`accordion ${state.evenKey5 ? 'actives' : ''}`}>HƯỚNG DẪN MUA HÀNG</button>
                                        <div className={`panel ${state.evenKey5 ? 'panel_0' : ''}`}>
                                            <p>Quý khách có thể mua sản phẩm ZeKang theo 3 phương thức sau:</p>
                                            <p>1. Truy cập vào website <a href="/">http://zekang.com.vn</a> để tham khảo, lựa chọn sản phẩm cần mua và đặt hàng</p>
                                            <p>2. Gọi điện trực tiếp đến chúng tôi thông qua số Hotline: 0914 479 866 hay số cố định 024 2284 9090 để được tư vấn mua hàng</p>
                                            <p>3. Liên hệ các đại lý phân phối gần nhất của chúng tôi để được tư vấn và đặt hàng. Tìm địa chỉ mua hàng gần nhất tại đây</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="distant____"></div>
                <div>
                    <span className="title-opg">các sản phẩm liên quan khác</span>
                    <div className="distant___"></div>
                    <Row>
                        {
                            showProduct()
                        }
                    </Row>
                </div>
            </Container>
            <div className="distant___"></div>
        </React.Fragment>
    );
}

export default DescProduct;