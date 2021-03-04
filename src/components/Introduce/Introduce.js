import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss'
function Introduce(props) {
    return (
        <React.Fragment>
            <style jsx>
                {
                    `.profZ span::after{
                        content: url('../img/tree.png');
                        position: absolute;
                        top: -80%;
                        right: -10%;
                    }`
                }
            </style>
            <div className="distant__"></div>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={6} className="inf-img ing-img_ ing-img_1">
                        <div className="profZ">
                            <div>
                                <span>
                                    Giới thiệu chung về công ty
                                </span>
                            </div><br/>
                            <div className="profzDes">
                                <p> Công ty TNHH Phân Phối Dược Phẩm ANT là một công ty có bề dày kinh nghiệm trong lĩnh vực chăm sóc sức khỏe và phân phối dược mỹ phẩm. Chúng tôi hiện đang hợp tác phân phối với nhiều hãng dược mỹ phẩm nổi tiếng trên thế giới. Với mạng lưới phân phối rộng khắp và uy tín,đội ngũ kỹ thuật là những chuyên gia đầu ngành trong lĩnh vực chăm sóc sức khỏe và y tế , chúng tôi cam kết mang đến cho khách hàng những sản phẩm với giá cả và chất lượng tốt nhất . </p>
      
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6} className="inf-img inf-img__0">
                        <div className="infAboutImg_">
                            <div className="infAboutImg">
                                <img src="../img/img2.jpg" alt="inf" className="img-fluid dir" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="distant_ distant__"></div>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={6} className="inf-img inf-img-0 inf-img_1">
                        <div className="infAboutImg_">
                            <div className="infAboutImg">
                                <img src="https://res.cloudinary.com/truyenfull/image/upload/v1614841307/zekang/z2357272118453_fe9855a272ecea1f34633f306bb9e312_gyifjq.jpg" alt="inf" className="img-fluid " />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6} className="inf-img inf-img-0 inf-img-1 ">
                        <div className="profZ">
                            <div>
                                <span>
                                    Giới thiệu chung về sản phẩm
                            </span>
                            </div><br/>
                            <div className="profzDes">
                                <p>Bộ sản phẩm Zekang của hãng Sky Loyal Technology, gồm các sản phẩm bôi dạng kem và sữa tắm, dầu gội dạng lỏng, có công dụng hỗ trợ điều trị bệnh vảy nến, viêm da cơ địa. Sản phẩm được chiết suất từ những chất thảo dược có tính kháng khuẩn tự nhiên cao như dầu đậu đen, long não đại bị, cây hoa chuông , hoa mẫu đơn …vv. Với thành phần  hoàn toàn không chứa corticoid và chất bảo quản, sản phẩm có thể sử dụng lâu dài mà không gây có tác dụng phụ . Sản phẩm được chấp nhận và tiêu thụ rộng rãi tại nhiều quốc gia trên thế giới từ châu Á đến thị trường kiểm soát nghiêm ngặt như Mỹ và châu Âu. </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="distant__"></div>
        </React.Fragment>
    );
}

export default React.memo(Introduce);
