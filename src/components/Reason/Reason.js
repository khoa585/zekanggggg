import React from 'react';
import './style.scss';
import { Container, Row, Col } from 'react-bootstrap';
import '../Home/ProductItem/style.scss'
import CurrencyFormat from 'react-currency-format';
import { to_slug, formatStar } from '../../commons/index';
import { Link } from '../../../routers'
function Reason(props) {
    const detail = props[0]
    const list = props[1]
    const { title, image, html, description } = detail;
    const showProduct = () => {
        if (list) {
            let result = list.map((task, index) => {
                return <Link route={`/san-pham/${to_slug(task.name)}.${task.id}`} key={index}>
                    <a className="resp col-lg-3 col-md-3 col-sm-3 ">
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
                    </a>
                </Link>
            })
            return result;
        }
    }
    return (
        <React.Fragment>
            <div className="distantComp"></div>
            <Container>
                <div className="title-wrap-reason">
                    <Link route="/"><a><span className="title-wrap-reason-home">Home</span></a></Link>
                    <Link route="/tin-tuc" ><a><span className="title-wrap-reason-news">Tin tức</span></a></Link>
                    <span className="title-wrap-reason-product">{title}</span>
                </div>
                <div className="distant-Comp"></div>
                <div className="reason-main">
                    <h5>{title}</h5>
                    <div className="reason-img">
                        <img src={image} alt="" className="img-fluid" />
                    </div>
                    <div className="content-reason">
                        <div className="content-reason-o">
                            <p>{description}</p>
                            <div className="content-reason-o" dangerouslySetInnerHTML={{ __html: html }}></div>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="title-opg">các sản phẩm liên quan khác</span>
                    <div className="distant___"></div>
                    <Row className="product-show">
                        {showProduct()}
                    </Row>
                </div>
            </Container>
            <div className="distant-Comp"></div>
        </React.Fragment>
    );
}

export default Reason;