import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss'
import '../Home/ProductItem/style.scss';
import { Link } from '../../../routers';
import { to_slug, formatStar } from '../../commons/index';
import CurrencyFormat from 'react-currency-format';
import Moment from 'react-moment';
import { fetchListNews } from '../../api/news';
function Newsz(props) {
    const List = props[0];
    const ListN = props[1];
    if (props[0]) {
        const ListP = props[0][0];
        var { image, title, description, id, createdAt } = ListP
        var [stateList, setStateList] = useState(List.slice(1))
    }
    const counted = 4;
    const [count, setCount] = useState({ counts: 2 })
    const [showButton, setShowButton] = useState(true)
    const Setcounts = async () => {
        const resultdata = await fetchListNews(count.counts, counted)
        setCount({
            counts: count.counts + 1
        })
        const data = resultdata?.data?.data
        if (data.length === 0) {
            setShowButton(false)
        }
        setStateList(stateList.concat(data))
    }

    const showNews = () => {
        if (List) {
            let result = stateList.map((task, index) => {
                return <div key={index}>
                    <Row className="padding-news-note">
                        <Col lg={5} md={5} sm={5} xs={5}>
                            <div className="img-news-0">
                                <img src={task.image} alt="" className="img-fluid d-block mx-auto"></img>
                            </div>
                        </Col>
                        <Col lg={7} md={7} sm={7} xs={7}>
                            <div className="img-news-1">
                                <h4>{task.title}</h4>
                                <p>{task.description}</p>
                                <Link route={`/tin-tuc/${to_slug(task.title)}.${task.id}`}><a><span><button className="btn-news-0 btn-news_0">xem chi tiết</button></span></a></Link>
                            </div>
                        </Col>
                    </Row>
                    <div className="distant_news-1"></div>
                </div>
            })
            return result
        }
    }
    const showProduct = () => {
        if (ListN) {
            let result = props[1].map((task, index) => {
                return <Link route={`/san-pham/${to_slug(task.name)}.${task.id}`} key={index}>
                    <a className="resp col-lg-3 col-md-3 col-sm-3 pest">
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
            <div className="distant_news"></div>
            {
                image ?
                    <Container>
                        <div className="title-wrap-news">
                            <Link route="/"><a><span className="title-wrap-home-news">Home</span></a></Link>
                            <span className="title-wrap-news">Tin tức </span>
                        </div>
                        <div className="distant_news_0"></div>
                        <div className="gallery-item-news">
                            <div className="img-content-news">
                                <img src={image} className="" className="img-fluid d-block mx-auto" />
                            </div>

                            <div className="text-wrapper-news">
                                <div className="text-wrap-box-news">
                                    <div className="text-wrap-context-news">
                                        <div className="news-opg">
                                            <h4 className="titleWow-news">{title}</h4>
                                            <span><Moment format="DD/MM/YYYY" date={createdAt} /></span>
                                        </div>
                                        <p>{description}</p>
                                        <Link route={`/tin-tuc/${to_slug(title)}.${id}`}><a><span> <button className="btn-news btn-news_">xem chi tiết</button></span></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="distant_news-1"></div>
                            <Row className="padding-news-note soss">
                                {showNews()}
                            </Row>
                            <div className="showdes">
                                {
                                    showButton ? <button className="btn_new_1 btn_new_2" onClick={() => Setcounts()}>xem Thêm</button> : ''
                                }
                            </div>
                        </div>
                        <div className="distant_news-2"></div>
                        <div>
                            <span className="title-opg">các sản phẩm bạn có thể quan tâm</span>
                            <Row className="product-show">
                                {
                                    showProduct()
                                }
                            </Row>
                        </div>
                    </Container>
                    :
                    <div></div>
            }

            <div className="distant_news"></div>
        </React.Fragment>
    );
}

export default React.memo(Newsz);