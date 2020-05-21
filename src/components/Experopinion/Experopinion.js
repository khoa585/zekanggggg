import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';
import { Link } from './../../../routers';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form, Input } from 'formik-antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { fetchSendQuestion } from '../../api/question';
import { toast } from 'react-toastify';
const { TextArea } = Input;
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
                    <Link route="/"><a><span className="title-experopinion-home">Home</span></a></Link>
                    <span className="title-experopinion_">Ý Kiến Chuyên Gia</span>
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
                                <Formik
                                    initialValues={{
                                        usename: '',
                                        phone: '',
                                        Email: '',
                                        contentQuestion: '',
                                    }}
                                    onSubmit={async (values, { setSubmitting }) => {
                                        const data = {
                                            name: values.usename,
                                            phone: values.phone,
                                            email: values.Email,
                                            content: values.contentQuestion,
                                        }
                                        const result = await fetchSendQuestion(data)
                                        if (result.status == 200 && result.data?.status == "success") {
                                            toast.success("Gửi thành công");
                                            values.usename = '';
                                            values.phone = '';
                                            values.Email = '';
                                            values.contentQuestion = '';
                                        } else {
                                            toast.error("Có Lỗi Xảy Ra Khi Gửi");
                                        }
                                    }}
                                    validationSchema={
                                        yup.object().shape({
                                            usename: yup.string().required('Hãy nhập họ và tên.'),
                                            phone: yup.string().required('Hãy nhập số điện thoại.'),
                                            Email: yup.string().required('Hãy nhập nhập Email.'),
                                            contentQuestion: yup.string().required('Hãy nhập nhập nội dung và câu hỏi.'),
                                        })
                                    }
                                >
                                    {({
                                        values,
                                        handleSubmit,
                                        handleChange,
                                        errors,
                                        touched
                                    }) => (
                                            <div>
                                                <Form onSubmit={handleSubmit}>
                                                    <div className="submit-note submitForm">
                                                        <button type="submit" className="submit-form">Gửi câu hỏi</button>
                                                    </div>
                                                    <div className="input-text">
                                                        <Input
                                                            name='usename'
                                                            value={values.usename}
                                                            onChange={handleChange}
                                                            placeholder="Họ và tên"
                                                            className="form-question"
                                                        />
                                                        {
                                                            errors.usename && touched.usename && (
                                                                <span className="errors"><ExclamationCircleOutlined />&emsp;{errors.usename}</span>
                                                            )
                                                        }
                                                    </div>
                                                    <div className="input-text">
                                                        <Input
                                                            name='phone'
                                                            value={values.phone}
                                                            onChange={handleChange}
                                                            placeholder="Số điện thoại"
                                                            className="form-question"
                                                        />
                                                        {
                                                            errors.phone && touched.phone && (
                                                                <span className="errors"><ExclamationCircleOutlined />&emsp;{errors.phone}</span>
                                                            )
                                                        }
                                                    </div>
                                                    <div className="input-text">
                                                        <Input
                                                            name='Email'
                                                            value={values.Email}
                                                            onChange={handleChange}
                                                            placeholder="Nhập Email"
                                                            className="form-question"
                                                        />
                                                        {
                                                            errors.Email && touched.Email && (
                                                                <span className="errors"><ExclamationCircleOutlined />&emsp;{errors.Email}</span>
                                                            )
                                                        }
                                                    </div>
                                                    <div className="textarea-text" >
                                                        <TextArea rows={2}
                                                            name="contentQuestion"
                                                            value={values.contentQuestion}
                                                            className="form-question"
                                                            placeholder="Nhập nội dung và câu hỏi..."
                                                        />
                                                        {
                                                            errors.contentQuestion && touched.contentQuestion && (
                                                                <span className="errors"><ExclamationCircleOutlined />&emsp;{errors.contentQuestion}</span>
                                                            )
                                                        }
                                                    </div>
                                                    <div className="submit-note_ submitForm">
                                                        <button type="submit" className="submit-form">Gửi câu hỏi</button>
                                                    </div>
                                                </Form>
                                            </div>
                                        )}
                                </Formik>
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