import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss'
function Experopinion(props) {
    const Question = [
        {
            'question': 'Vẩy nến là bệnh gì?',
            'aws': 'Bệnh vảy nến là bệnh da mạn tính.  Bệnh thường tiến triển từng đợt, dai dẳng, có thể gặp ở bất kì lứa tuổi nào, và ảnh hưởng đến bất kì phần nào trên bề mặt của da. Hiện chưa thể chữa khỏi hoàn'
        },
        {
            'question': 'Vẩy nến được chia làm mấy loại thể?',
            'aws': 'Bệnh vảy nến là bệnh da mạn tính.  Bệnh thường tiến triển từng đợt, dai dẳng, có thể gặp ở bất kì lứa tuổi nào, và ảnh hưởng đến bất kì phần nào trên bề mặt của da. Hiện chưa thể chữa khỏi hoàn'
        },
        {
            'question': 'Vẩy nến là bệnh gì?',
            'aws': 'Bệnh vảy nến là bệnh da mạn tính.  Bệnh thường tiến triển từng đợt, dai dẳng, có thể gặp ở bất kì lứa tuổi nào, và ảnh hưởng đến bất kì phần nào trên bề mặt của da. Hiện chưa thể chữa khỏi hoàn'
        },
        {
            'question': 'Vẩy nến là bệnh gì?',
            'aws': 'Bệnh vảy nến là bệnh da mạn tính.  Bệnh thường tiến triển từng đợt, dai dẳng, có thể gặp ở bất kì lứa tuổi nào, và ảnh hưởng đến bất kì phần nào trên bề mặt của da. Hiện chưa thể chữa khỏi hoàn'
        },
        {
            'question': 'Vẩy nến là bệnh gì?',
            'aws': 'Bệnh vảy nến là bệnh da mạn tính.  Bệnh thường tiến triển từng đợt, dai dẳng, có thể gặp ở bất kì lứa tuổi nào, và ảnh hưởng đến bất kì phần nào trên bề mặt của da. Hiện chưa thể chữa khỏi hoàn'
        },
        {
            'question': 'Vẩy nến là bệnh gì?',
            'aws': 'Bệnh vảy nến là bệnh da mạn tính.  Bệnh thường tiến triển từng đợt, dai dẳng, có thể gặp ở bất kì lứa tuổi nào, và ảnh hưởng đến bất kì phần nào trên bề mặt của da. Hiện chưa thể chữa khỏi hoàn'
        },
        {
            'question': 'Vẩy nến là bệnh gì?',
            'aws': 'Bệnh vảy nến là bệnh da mạn tính.  Bệnh thường tiến triển từng đợt, dai dẳng, có thể gặp ở bất kì lứa tuổi nào, và ảnh hưởng đến bất kì phần nào trên bề mặt của da. Hiện chưa thể chữa khỏi hoàn'
        },
        {
            'question': 'Vẩy nến là bệnh gì?',
            'aws': 'Bệnh vảy nến là bệnh da mạn tính.  Bệnh thường tiến triển từng đợt, dai dẳng, có thể gặp ở bất kì lứa tuổi nào, và ảnh hưởng đến bất kì phần nào trên bề mặt của da. Hiện chưa thể chữa khỏi hoàn'
        },
        {
            'question': 'Vẩy nến là bệnh gì?',
            'aws': 'Bệnh vảy nến là bệnh da mạn tính.  Bệnh thường tiến triển từng đợt, dai dẳng, có thể gặp ở bất kì lứa tuổi nào, và ảnh hưởng đến bất kì phần nào trên bề mặt của da. Hiện chưa thể chữa khỏi hoàn'
        },
        {
            'question': 'Vẩy nến là bệnh gì?',
            'aws': 'Bệnh vảy nến là bệnh da mạn tính.  Bệnh thường tiến triển từng đợt, dai dẳng, có thể gặp ở bất kì lứa tuổi nào, và ảnh hưởng đến bất kì phần nào trên bề mặt của da. Hiện chưa thể chữa khỏi hoàn'
        },
        {
            'question': 'Vẩy nến là bệnh gì?',
            'aws': 'Bệnh vảy nến là bệnh da mạn tính.  Bệnh thường tiến triển từng đợt, dai dẳng, có thể gặp ở bất kì lứa tuổi nào, và ảnh hưởng đến bất kì phần nào trên bề mặt của da. Hiện chưa thể chữa khỏi hoàn'
        }
    ]
    useEffect(() => {
        const getAccordion = () => {
            var Accordion = document.getElementsByClassName("accordion-experopinion");
            for (var i = 0; i < Accordion.length; i++) {
                Accordion[i].addEventListener("click", function () {
                    this.classList.toggle("active-experopinion");
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                });
            }
        }
        getAccordion()
    }, [])
    return (
        <React.Fragment>
            <div className="distant___"></div>
            <Container>
                <div className="title-experopinion">
                    <span className="title-experopinion-home">Home</span>
                    <span className="title-experopinion">Ý Kiến Chuyên Gia</span>
                </div>
                <div className="distant___"></div>
                <div>
                    <Row>
                        <Col lg={8} md={8} sm={12} xs={12} className="wrap-contai">
                            <div className="experopinion-wrap">
                                {
                                    Question.map((task, index) => {
                                        return <div key={index} className="first-child-context">
                                            <button className="accordion-experopinion">{task.question}</button>
                                            <div className="panel-experopinion">
                                                <p>{task.aws}</p>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} className="wrap-contai-send">
                            <div className="send-wrap">
                                <div className="submit-note"><input type="submit" value="Gửi câu hỏi"></input></div>
                                <div className="input-text"> <input type="input" placeholder="Họ và tên" ></input></div>
                                <div className="input-text"> <input type="input" placeholder="Số điện thoại" ></input></div>
                                <div className="textarea-text" ><textarea placeholder="Nhập nội dung và câu hỏi..." rows="8" ></textarea></div>
                                <div className="submit-note_"><input type="submit" value="Gửi câu hỏi"></input></div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className="distant___"></div>
        </React.Fragment>
    );
}

export default Experopinion;