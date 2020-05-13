import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Home/ProductItem/style.scss';
//import Link from 'next/link';
import {Link} from './../../../routers';
import { formatStar, to_slug, formatNumber } from '../../commons/index';
function Products(props) {
    const { List } = props;
    const showProduct = () => {
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
                                    <span className="price">{formatNumber(task.price)}</span>
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
                    <span className="title-wrap-home">Home</span>
                    <span className="title-wrap-product">Sản Phẩm </span>
                </div>
                <div className="distant___"></div>
                <Row>
                    {showProduct()}
                </Row>
            </Container>
            <div className="distant___"></div>
        </React.Fragment>
    );
}

export default Products;