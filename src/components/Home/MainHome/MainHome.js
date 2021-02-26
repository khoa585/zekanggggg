import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './style.scss'
import { Link } from './../../../../routers';
function MainHome() {
    const params = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false
        },
    }
    const data = [
        'https://res.cloudinary.com/truyenfull/image/upload/v1614331743/zekang/z2350439553213_4b01941e2ecbbade9c841e21e46e9cac_itzcrc.jpg',
        'https://res.cloudinary.com/truyenfull/image/upload/v1614331743/zekang/z2350439995992_544faa322b23814f3e565678c8bdc98e_lxuzjc.jpg',
        'https://res.cloudinary.com/truyenfull/image/upload/v1614331743/zekang/z2350439810490_5b0cbda6117ec0e58c68225bcfd2f0f5_jqpzke.jpg',
        'https://res.cloudinary.com/truyenfull/image/upload/v1614331932/zekang/KHAH9264_2_pzhjgl.jpg'
    ]
    return (
        <div>
            <main className="back-front-page">
                <Swiper {...params}>
                    {
                        data.map((item, index) => {
                            return (
                                <div className="swiper-slide" key={index}>
                                    <div className="gallery-item">
                                        <div className="img-content" style={{
                                            backgroundImage: `url(${item})`
                                        }}>
                                        </div>
                                        <div className="text-wrapper">
                                            <div className="text-box"></div>
                                            <div className="text-wrap-box">
                                                <div className="text-wrap-context">
                                                    <h4 className="titleWow">Chương trình ưu đãi tri ân khách hàng</h4>
                                                    <h4 className="titleWow">New, Bigger Sizes!</h4>
                                                    <p>Enjoy our bestselling body and hair staples, now available in a a family friendly 32 or size</p>
                                                    <Link href="/news" as="/tin-tuc">
                                                        <button className="btn btn_">xem chi tiết</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </Swiper>
            </main>
            <style jsx>{`
           .img-content{
            background-image: url(${`../img/Bin.jpg`});
            height: 100%;
            width: 80%;
            background-position: center;
            background-size: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            position: absolute;
            right: 0;
        }
        .text-wrap-box {
            background-image: url('../img/Last.png');
            background-size: contain;
            background-repeat: no-repeat;
            height: 100%;
            display: flex;
            width: 30%;
            z-index: 9;
            position: absolute;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
            `}</style>
        </div>
    );
}

export default React.memo(MainHome);