import React, { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { Button, Upload, Breadcrumb, Rate } from 'antd';
import { Form, Input, InputNumber } from 'formik-antd';
import { UploadOutlined } from '@ant-design/icons';
import { fetchAddProduct } from './../../../api/products';
import { toast } from 'react-toastify';
import Router from 'next/router'
const { TextArea } = Input;
import { Formik } from 'formik';
import * as yup from 'yup';
import Link from 'next/link';
import {BASE_URL} from './../../../api/config';
import './style.scss';
import { ExclamationCircleOutlined } from '@ant-design/icons';
function AddProduct(props) {
    const [fileList, setFileList] = useState([]);
    const [state, setState] = useState(false)
    const props2 = {
        listType: 'picture',
        FileList: [...fileList],
        className: 'upload-list-inline',
        action:BASE_URL+'/api/upload',   
    };
    const onChangeUpload = (info) => {
        let filesList = [...info.fileList];
        filesList = filesList.slice(-1);
        filesList = filesList.map((file) => {
            if (file.response) {
                file.url = file.response.data.url;
            }
            return file;
        })
        setFileList(filesList);
    }
    const rateRef = useRef(5);
    const images = fileList.map(file => {
        return file.url;
    })
    const onAddProduct = () => {
        if (!fileList.length) {
            setState(true);
        }
    }
    return (
        <Container className="contai-add">
                <Link href="/admin"><Breadcrumb.Item>Admin</Breadcrumb.Item></Link>
                <Link href="/admin/product"><Breadcrumb.Item>Sản Phẩm</Breadcrumb.Item></Link>
                <Breadcrumb.Item className="name_P">Thêm Sản Phẩm</Breadcrumb.Item>
            <Formik
                initialValues={{
                    nameProduct: '',
                    priceProduct: '',
                    descriptionsProduct: '',
                    ingredients: '',
                    usage: '',
                    heed: '',
                    expirydate: '',
                    evaluation: '',
                }}
                onSubmit={async (values, { setSubmitting }) => {
                    let data = {
                        name: values.nameProduct,
                        price: values.priceProduct,
                        images: images,
                        start: rateRef.current.state.value,
                        descriptions: values.descriptionsProduct,
                        ingredients: values.ingredients,
                        usage: values.usage,
                        heed: values.heed,
                        expirydate: values.expirydate,
                        evaluation: values.evaluation
                    }
                    let resultAdd = await fetchAddProduct(data);
                    if (resultAdd.status == 200 && resultAdd.data?.status == "success") {
                        toast.success("Tạo Thành Công Sản Phẩm");
                        setFileList([]);
                        values.nameProduct = '',
                            values.priceProduct = '',
                            rateRef.current.state.value = 5
                            values.descriptionsProduct = '',
                            values.ingredients = '',
                            values.usage = '',
                            values.heed = '',
                            values.expirydate = '',
                            values.evaluation = ''
                        Router.push("/admin/product");
                    }
                    else {
                        toast.error("Có Lỗi Xảy Ra Khi Tạo");
                    }
                }}
                validationSchema={
                    yup.object().shape({
                        nameProduct: yup.string().required('Hãy nhập tên sản phẩm.'),
                        priceProduct: yup.number()
                            .typeError('Hãy nhập số')
                            .required("Hãy nhập giá sản phẩm."),
                        descriptionsProduct: yup.string().required('Hãy nhập miêu tả sản phẩm.'),
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
                                <div>
                                    <span htmlFor='nameProduct'>Tên sản phẩm</span>
                                    <Input
                                        name='nameProduct'
                                        value={values.nameProduct}
                                        onChange={handleChange}
                                        className={`form-product ${errors.nameProduct && touched.nameProduct && 'errors'}`}
                                    />
                                    {
                                        errors.nameProduct && touched.nameProduct && (
                                            <span className="errors"><ExclamationCircleOutlined /> {errors.nameProduct}</span>
                                        )
                                    }
                                </div>
                                <div>
                                    <span htmlFor='priceProduct'>Giá sản phẩm</span>
                                    <InputNumber
                                        defaultValue={0}
                                        style={{ padding: 0, width: 200 }}
                                        name='priceProduct'
                                        value={values.priceProduct}
                                        className={`form-product ${errors.priceProduct && touched.priceProduct && 'errors'}`}
                                    />
                                    {
                                        errors.priceProduct && touched.priceProduct && (
                                            <span className="errors"><ExclamationCircleOutlined /> {errors.priceProduct}</span>
                                        )
                                    }
                                </div>
                                <div>
                                    <span htmlFor='starProduct'>Sao</span><br/>
                                    <Rate ref={rateRef}
                                        defaultValue={5}
                                        className="form-product"
                                    />
                                </div>
                                <div>
                                    <span htmlFor='descriptionsProduct'>Chi tiết sản phẩm</span>
                                    <TextArea rows={4}
                                        name='descriptionsProduct'
                                        value={values.descriptionsProduct}
                                        onChange={handleChange}
                                        className={`form-product ${errors.descriptionsProduct && touched.descriptionsProduct && 'errors'}`}
                                    />
                                    {
                                        errors.descriptionsProduct && touched.descriptionsProduct && (
                                            <span className="errors"><ExclamationCircleOutlined /> {errors.descriptionsProduct}</span>
                                        )
                                    }
                                </div>
                                <div>
                                    <span>Ảnh</span><br/>
                                    <Upload {...props2}
                                        onChange={onChangeUpload}
                                    >
                                        <Button>
                                            <UploadOutlined /> Upload
                                    </Button>
                                    </Upload>
                                    {
                                        state && !images.length ? <span className="errors"><ExclamationCircleOutlined /> Hãy tải ảnh </span> : ''
                                    }
                                </div>
                                <div>
                                    <span htmlFor="ingredients">Thành phần</span>
                                    <TextArea rows={2}
                                        name="ingredients"
                                        value={values.ingredients}
                                        className="form-product"
                                    />
                                </div>
                                <div>
                                    <span htmlFor="usage">Cách sử dụng</span>
                                    <TextArea rows={2}
                                        name="usage"
                                        value={values.usage}
                                        className="form-product"
                                    />
                                </div>
                                <div>
                                    <span htmlFor="heed">Chú ý</span>
                                    <TextArea rows={2}
                                        name="heed"
                                        value={values.heed}
                                        className="form-product"
                                    />
                                </div>
                                <div>
                                    <span htmlFor="expirydate">Hàm Lượng Và Hạn sử dụng</span>
                                    <TextArea rows={2}
                                        name="expirydate"
                                        value={values.expirydate}
                                        className="form-product"
                                    />
                                </div>
                                <div>
                                    <span htmlFor="evaluation">Đánh giá</span>
                                    <TextArea rows={2}
                                        name="evaluation"
                                        value={values.evaluation}
                                        className="form-product"
                                    />
                                </div>
                                <div className="submitForm">
                                    <button type="submit" onClick={onAddProduct}>
                                        Thêm Sản Phẩm
                                    </button>
                                </div>
                            </Form>
                        </div>
                    )}
            </Formik>
        </Container >
    );
}

export default AddProduct;


