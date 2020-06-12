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
            'aws': 'Bệnh vảy nến là bệnh da mạn tính.  Bệnh thường tiến triển từng đợt, dai dẳng, có thể gặp ở bất kì lứa tuổi nào, và ảnh hưởng đến bất kì phần nào trên bề mặt của da. Hiện chưa thể chữa khỏi hoàn toàn'
        },
        {
            'question': 'Nguyên nhân gây bệnh vẩy nến?',
            'aws': 'Cơ chế sinh bệnh vảy nến bao gồm yếu tố gen di truyền, rối loạn yếu tố miễn dịch, và các yếu tố từ môi trường. Yếu tố di truyền, nếu bố hoặc mẹ bị bệnh thì có khoảng 8% con bị bệnh, nếu cả bố và mẹ bị bệnh thì tới 41% con mắc bệnh.  Yếu tố di truyền liên quan đến HLA-B27- B13,-B17, -Bw57 và HLA-Cw6, Psori1… Miễn dịch liên quan đến các tế bào miễn dịch lympho T ở da, đặc biệt là Th1, Th17 và Th22. Các yếu tố khác như nhiễm khuẩn, chấn thương, thuốc, thức ăn. Các yếu tố có thể làm bệnh nặng hơn là các sang chấn như gãi, chà sát mạnh. Nhiễm trùng mà thường là nhiễm liên cầu. Các stress tâm lý , sử dụng thuốc corticosteroid, lithium, các thuốc chống sốt rét, interferon … có thể làm nặng bệnh. Rượu cũng là tác nhân làm cho bệnh nặng lên.'
        },
        {
            'question': 'Vẩy nến được chia làm mấy loại thể?',
            'aws': '<p>1. Vảy nến thể thông thường</p> <p>2. Vảy nến thể giọt</p> <p>3. Thể đồng tiền</p> <p>4. Thể mảng</p> <p>5. Vảy nến thể đặc biệt: thể đảo ngược</p> <p>6. thể ở lòng bàn chân-bàn tay</p> <p>7. Thể đỏ da toàn thân vảy nến</p> <p>8. thể mủ</p> <p>9. Vảy nến móng</p> <p>10. Vẩy nến khớp</p> <p>11.  Viêm đầu chi liên tục</p> <p>12. vảy nến niêm mạc.'
        },
        {
            'question': 'Nên làm gì khi nghi ngờ bị bệnh vẩy nến?',
            'aws': 'Đến cơ sở khám chữa bệnh về da thuộc tỉnh hoặc trung ương, để làm những xét nghiệm lâm sàng cho bệnh nhân. Vì rất nhiều trường hợp chẩn đoán sai bệnh, dẫn đến điều trị không trúng đích. Gây hoang mang cho người vẩy nến.'
        },
        {
            'question': 'Cách sử dụng kem ZeKang?',
            'aws': '<p>1. Sử dụng ZeKang, vừa đủ, không cần chà sát mạnh, thoa kem nhẹ nhàng, không cố gắng làm bong vẩy trên da hoặc gãi để làm tổn thương trên bề mặt da</p><p> 2.	Trong những tuần đầu sử dụng, khách hàng sẽ cảm nhận được thấy làn da khô của mình cải thiện đáng kể</p><p>3. Bạn cần sử dụng hàng ngày hoặc xen kẽ 2 dòng sản phẩm của ZeKang sẽ có kết quả thực sự tuyệt vời.</p><p>4. Ngừng sử dụng sản phẩm khi gặp những trường hợp không mong muốn, như là bị sưng tấy, đỏ, đau đớn và khó chịu.</p><p>5. Bạn có thể sử dụng tiết kiệm hơn, hoặc thấm chí có thể dùng chung với dưỡng ẩm thông thường khác và cần  đảm bảo đó tự nhiên và an toàn cho da.</p><p>6. Hãy trò chuyện với chúng tôi, nếu bạn còn có bất kì thắc mắc nào? Chúng tôi sẽ luôn sẵn sàng hỗ trợ Bạn.'
        },
        {
            'question': 'Chế độ ăn uống nào phù hợp với người vẩy nến?',
            'aws': 'Có 5 nhóm thực phẩm nên có cho người bị vẩy nến: <p>1.	Chất chống oxy : có nhiều trong quả bưởi và ngũ cốc</p><p>2. Folate: Có trong ngũ cốc, đậu lăng, lúa mì, đậu Hà Lan, cây bông cải xanh, cải bắp, giá và nước cam. Folate giúp phân chia tế bào da cho một làn da khỏe mạnh.</p><p>3. Betacarotene:Có trong cà rốt, rau lá xanh, quả mơ, xoài. Beta carotene giúp chuyển hóa vitamin A trong cơ thể, điều này cần thiết cho làn da khỏe mạnh</p><p>4. Kẽm: Có trong sò và các thực phẩm có ngũ cốc. Thiếu kẽm thường thấy ở người vảy nến.</p> <p>5. Axit béo OMEGA 3: Có nhiều trong các loại cá như cá mòi, cá thu và cá hồi; hạt lanh, hạt hướng dương  và hạt mè... Axit béo Omega-3'
        },
        {
            'question': 'Những sản phẩm nên tránh với người bị vẩy nến?',
            'aws': '<p>- Họ cam quýt, cả trái cây lẫn nước ép.</p><p>- Đường, cả đường tinh luyện lẫn tự nhiên.</p><p>- Thực phẩm chiên xào lẫn chế biến sẵn như thịt hộp, thịt nguội...</p><p>- Thức ăn nhiều gia vị.</p><p>- Hạt tiêu.</p><p>- Chocolate. Để kiểm soát cân nặng và Chúng tôi khuyên bạn nên tham khảo các chuyên gia hoặc cơ sở uy tín để xây dựng chế độ hợp lý cho cơ thể mình.'
        },
        {
            'question': 'Viêm khớp vẩy nến là gì?',
            'aws': 'Viêm khớp vảy nến là tình trạng viêm khớp có liên quan với bệnh vảy nến. đặc điểm cơ bản là sưng toàn bộ ngón tay, và ngón chân. Phá huỷ khớp dẫn đến mất chức năng vận động.'
        },
        {
            'question': 'Tôi có thể mắc phải vẩy nến da đầu?',
            'aws': 'Bệnh vẩy nến có thể ảnh hưởng đến bất kỳ bộ phận nào của cơ thể bạn, da đầu cũng không ngoại lệ. Bệnh vẩy nến da đầu là một tình trạng da phổ biến làm cho các mảng nổi lên, đỏ, thường có vảy trắng. Nó có thể xuất hiện một vài vị trí, và thậm chí có thể ảnh hưởng đến toàn bộ da đầu của bạn. Nó cũng có thể lan ra trán, sau gáy và cũng có thể xuất hiện ở trong tai của bạn.'
        },
        {
            'question': 'Bệnh vẩy nến, khác với những viêm da cơ địa hay chàm như thế nào?',
            'aws': 'Bệnh chàm, viêm da cơ địa và bệnh vẩy nến là ba tình trạng thường bị nhầm lẫn với nhau, nhưng rất khác nhau. Cả ba đều được xếp loại viêm da. Bệnh chàm là một nhóm các tình trạng da nóng, khô, ngứa và đóng vảy. Trong những đợt bùng phát nghiêm trọng, da có thể trở nên thô, đỏ và chảy máu. Bệnh chàm được cho là một phản ứng với các chất kích thích hoặc dị ứng môi trường, và tình trạng do căng thẳng và biến đổi nội tiết tố. Bệnh viêm da cơ địa: Biểu hiện bệnh khi cấp tính là đám da đỏ ranh giới không rõ, các sẩn và đám sẩn, mụn nước tiết dịch, không có vẩy da. Da bị phù nề, chảy dịch, đóng vảy tiết. Các vết xước do gãi tạo vết chợt, bội nhiễm tụ cầu tạo các mụn mủ và vẩy tiết vàng. Bệnh thường khư trú ở trán, má, cằm, nặng hơn có thể lan ra tay, thân mình. Bệnh vẩy nến là một tình trạng viêm da tự miễn. Nó được thể hiện bằng các mảng da màu đỏ nổi lên, phủ một lớp bạc trắng. Vị trí phổ biến nhất là xuất hiện ở đầu gối, khuỷu tay, da đầu và lưng dưới.'
        },
        {
            'question': 'Có loại kem nào phù hợp với người vẩy nến?',
            'aws': 'Thực tế có đến hàng trăm loại kem trên thị trường, được sản xuất theo dây chuyền hiện đại hay gia truyền từ các loại thảo dược tự nhiên được kiểm chứng an toàn. Vì vậy chúng tôi mang đến sản phẩm ZeKang có được sự kết hợp tuyệt vời này. Nguyên liệu là thảo mộc có nguồn gốc hoàn toàn tự nhiên và an toàn với người dùng. Hi vọng sản phẩm sẽ mang lại hữu ích và tiện lợi đối với bạn. Hãy cho chúng tôi được biết cảm nhận của bạn dành cho sản phẩm.'
        },
        {
            'question': 'Tôi rất hay bị ngứa và trên bề mặt da vẫn nhờn khi sử dụng kem dưỡng da thông thường? làm sao để làm sạch da nhưng không bị khô?',
            'aws': 'Sản phẩm sữa tắm ZeKang sẽ mang lại sự khác biệt đột phá và vượt trội hơn hẳn các sản phẩm thông thường khác. Nhẹ nhàng lấy đi bụi bẩn, mồ hôi trên cơ thể, nhưng không làm mất đi độ ẩm trên da. Giảm ngứa, cũng rất hiệu quả.'
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
                                                <div dangerouslySetInnerHTML={{ __html:  `${task.aws}` }}></div>
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

export default React.memo(Experopinion);