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
                    <Link route="/"><span className="title-wrap-reason-home">Home</span></Link>
                    <Link route="/tin-tuc" ><span className="title-wrap-reason-news">Tin tức</span></Link>
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
                        {/* <p className="content-reason-as">Bệnh vảy nến là căn bệnh ngoài da thường gặp ở người Việt Nam. Bệnh không lây nhiễm nhưng gây ra nhiều khó chịu, làm ảnh hưởng trầm trọng đến sinh hoạt của người bệnh. Nếu không được điều trị kịp thời bệnh có thể dẫn đến nhiều biến chứng nguy hiểm như đỏ da toàn thân, vảy nến mủ, viêm khớp, nhiễm trùng da…</p>
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
                        </div> */}
                        {/* <p className="content-reason-f">Triệu chứng của bệnh vảy nến</p>
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
                        </div> */}
                    </div>
                </div>
                <div>
                    <span className="title-opg">các sản phẩm liên quan khác</span>
                    <div className="distant___"></div>
                    <Row>
                        {showProduct()}
                    </Row>
                </div>
            </Container>
            <div className="distant-Comp"></div>
        </React.Fragment>
    );
}

export default Reason;