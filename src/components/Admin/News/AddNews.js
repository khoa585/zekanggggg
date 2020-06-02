import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Button, Upload, Breadcrumb } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Container } from 'react-bootstrap';
import { fetchAddNews } from './../../../api/news';
import { toast } from 'react-toastify';
import Router from 'next/router';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form, Input } from 'formik-antd';
import {BASE_URL} from './../../../api/config';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const Ckeditor = dynamic(() => import("./../../CommonComponents/Ckeditor/Ckeditor"), {
    ssr: false
})
import './style.scss';
const { TextArea } = Input;
export default function AddNews() {
    const [content, setContent] = useState("");
    const titleRef = useRef();
    const desRef = useRef();
    const [fileList, setFileList] = useState([]);
    const [state, setState] = useState(false)
    const props2 = {
        listType: 'picture',
        FileList: [...fileList],
        className: 'upload-list-inline',
        action:BASE_URL+'/api/upload',   
    };
    const onEditorChange = (evt) => {
        setContent(evt.editor.getData());
    }
    const onChangeUpload = (info) => {
        let filesList = [...info.fileList];
        filesList = filesList.slice(-1);
        filesList = filesList.map((file) => {
            if (file.response) {
                // Component will show file.url as link
                file.url = file.response.data.url;
            }
            return file;
        })
        setFileList(filesList);
    }
    const onAddNews = async () => {
        if (!fileList.length) {
            setState(true);
        }
    }
    return (
        <Container className="contai-add">
            <Breadcrumb>
                <Breadcrumb.Item>Admin</Breadcrumb.Item>
                <Breadcrumb.Item>Tin Tức</Breadcrumb.Item>
                <Breadcrumb.Item>Thêm Tin Tức</Breadcrumb.Item>
            </Breadcrumb>
            <Formik
                initialValues={{
                    titleR: '',
                    desR: '',
                }}
                onSubmit={async (values, { setSubmitting }) => {
                    let data = {
                        title: values.titleR,
                        description: values.desR,
                        image: fileList[0]?.url,
                        html: content
                    }
                    let resultAdd = await fetchAddNews(data);
                    if (resultAdd.status == 200 && resultAdd.data?.status == "success") {
                        toast.success("Tạo Thành Công Tin Tức");
                        Router.push("/admin/news");
                    } else {
                        toast.error("Có Lỗi Xảy Ra Khi Tạo");
                    }
                }}
                validationSchema={
                    yup.object().shape({
                        titleR: yup.string().required('Hãy nhập tiêu đề.'),
                        desR: yup.string().required('Hãy nhập mô tả.'),
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
                        <Form onSubmit={handleSubmit}>
                            <div>
                                <span>Tiêu Đề</span><br />
                                <Input
                                    name='titleR'
                                    value={values.titleR}
                                    onChange={handleChange}
                                />
                                {
                                    errors.titleR && touched.titleR && (
                                        <span className="errors"><ExclamationCircleOutlined />&emsp;{errors.titleR}</span>
                                    )
                                }
                            </div>
                            <div>
                                <span>Mô Tả</span><br />
                                <TextArea rows={2}
                                    name="desR"
                                    value={values.desR}
                                />
                                {
                                    errors.desR && touched.desR && (
                                        <span className="errors"><ExclamationCircleOutlined />&emsp;{errors.desR}</span>
                                    )
                                }
                            </div>
                            <div>
                                <span>Ảnh</span><br />
                                <Upload  {...props2} onChange={onChangeUpload}>
                                    <Button>
                                        <UploadOutlined /> Upload
                                    </Button>
                                </Upload>
                                {
                                    state ? <span className="errors"><ExclamationCircleOutlined /> Hãy tải ảnh </span> : ''
                                }
                            </div>
                            <div>
                                <div>Nội Dung</div>
                                <Ckeditor
                                    data={content}
                                    onchange={onEditorChange}
                                />
                            </div>
                            <div className="submitForm">
                                <button type="submit" onClick={onAddNews}>Thêm Tin Tức</button>
                            </div>
                        </Form>
                    )}
            </Formik>
        </Container>
    )
}
