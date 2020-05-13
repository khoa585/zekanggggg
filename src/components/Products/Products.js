import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Home/ProductItem/style.scss';
import CurrencyFormat from 'react-currency-format';
import { Link } from './../../../routers';
import { formatStar, to_slug } from '../../commons/index';
import './style.scss'
function Products(props) {
    const { List } = props;
    const showProduct = () => {
        if (List) {
            let result = List.map((task, index) => {
                return <Link route={`/san-pham/${to_slug(task.name)}.${task.id}`} key={index}>
                    <Col lg={3} md={3} sm={3} className="resp pest" key={index}>
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
    }
    return (
        <React.Fragment>
            <div className="distant___"></div>
            <Container>
                <div className="title-wrap">
                    <Link route="/"><span className="title-wrap-home">Home</span></Link>
                    <span className="title-wrap-product">Sản Phẩm </span>
                </div>
                <Row>
                    {showProduct()}
                </Row>
            </Container>
            <div className="distant___"></div>
        </React.Fragment>
    );
}

export default Products;