import React from 'react';
import './style.scss';
import { Container, Row, Col } from 'react-bootstrap';
import '../Home/ProductItem/style.scss'
import { BsFillStarFill } from "react-icons/bs";
function Reason(props) {
    return (
        <React.Fragment>
            <div className="distantComp"></div>
            <Container>
                <div className="title-wrap-reason">
                    <span className="title-wrap-reason-home">Home</span>
                    <span className="title-wrap-reason-news">Tin tức</span>
                    <span className="title-wrap-reason-product">Bệnh vảy nến: Nguyên nhân, triệu chứng và cách phòng ngừa hiệu quả</span>
                </div>
                <div className="distant-Comp"></div>
                <div className="reason-main">
                    <h5>Bệnh vảy nến: Nguyên nhân, triệu chứng và cách phòng ngừa hiệu quả</h5>
                    <div className="reason-img">
                        <img src="../img/img-reason.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="content-reason">
                        <p className="content-reason-as">Bệnh vảy nến là căn bệnh ngoài da thường gặp ở người Việt Nam. Bệnh không lây nhiễm nhưng gây ra nhiều khó chịu, làm ảnh hưởng trầm trọng đến sinh hoạt của người bệnh. Nếu không được điều trị kịp thời bệnh có thể dẫn đến nhiều biến chứng nguy hiểm như đỏ da toàn thân, vảy nến mủ, viêm khớp, nhiễm trùng da…</p>
                        <div className="content-reason-o">
                            <p>Hiện nay, nguyên nhân chính xác gây ra bệnh vảy nến vẫn chưa được xác định. Tuy nhiên, một số chuyên gia da liễu cho rằng bệnh vảy nến có liên quan đến gene và rối loạn miễn dịch. Từ đó dẫn đến các tế bào da tăng sinh nhanh so với bình thường.
                            Những yếu tố về môi trường cũng được coi là nguyên nhân khởi phát, thúc đẩy cũng như làm nặng thêm. Ngoài ra, các yếu tố dưới đây cũng được coi là nguyên nhân gây nên bệnh:</p>
                            <ul>
                                <li>Chấn thương: Vảy nến có thể xuất hiện ở những da bị chấn thương thậm chí cả những vết trầy xước nhẹ.</li>
                                <li>Nhiễm trùng đường hô hấp trên như viêm họng, viêm amidan. Đây cũng có thể là nguyên nhân gây bệnh cũng như làm bệnh nặng thêm.</li>
                                <li>Bệnh vảy nến có thể xảy ra đối với những người có dấu hiệu của stress, luôn trong trạng thái buồn phiền, lo lắng, giận dữ
                                Thời tiết cũng là yếu tố dễ gây bùng phát bệnh vảy nến, đặc biệt là thời tiết lạnh và khô</li>
                                <li>Rượu cùng các chất kích thích như thuốc lá, café cũng có thể gây ra bệnh vảy nến.</li>
                            </ul>
                        </div>
                        <p className="content-reason-f">Triệu chứng của bệnh vảy nến</p>
                        <div className="content-reason-t">
                            <p>Đa số các trường hợp mắc bệnh vảy nến đều không có biểu hiện ngứa. Thường người bệnh chỉ có cảm giác đỏ rát, khô căng vùng da bị bệnh. Tùy theo vị trí xuất hiện và phạm vi tổn thương, có thể chia  thành các thể bệnh riêng biệ</p>
                            <ul>
                                <li>Vảy nến thể mảng: Đây là thể vảy nến khá phổ biến với 80% bệnh nhân mắc phải. Biểu hiện dễ gặp nhất là mảng da có đường kính từ 2 – 20cm xuất hiện ở khuỷu tay, đầu gối và vùng dưới lưng</li>
                                <li>Vảy nến mụn mủ: Xuất hiện mụn mủ ở vùng da tay và chân.</li>
                                <li>Vảy nến giọt: Tổn thương có dạng giọt nước kích thước 1 – 10mm xuất hiện khắp cơ thể, thường gặp ở trẻ em, sau đợt viêm họng do Streptococcus.</li>
                                <li>Viêm khớp vảy nến: Sưng khớp ngón tay, ngón chân hoặc xương sống, đầu gối…</li>
                                <li>Vảy nến móng: Móng dày, có những lỗ nhỏ trên bề mặt móng.</li>
                                <li>Vùng da đầu: Trên da đầu có vảy hoặc những mảng da dày màu trắng bạc.</li>
                                <li>Bệnh vảy nến ở nếp gấp: Gặp ở người bị béo phì, tổn thương ở các vùng nếp gấp của da như nách, háng, mông…</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="title-opg">các sản phẩm liên quan khác</span>
                    <div className="distant___"></div>
                    <Row>
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
                    </Row>
                </div>
            </Container>
            <div className="distant-Comp"></div>
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

export default Reason;