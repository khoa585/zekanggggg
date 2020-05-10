// import React ,{useState ,useRef,useEffect} from 'react';
// import { Container } from 'react-bootstrap';
// import { Input, Button, Upload ,Breadcrumb ,InputNumber ,Rate} from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// import {fetchAddProduct} from './../../../api/products';
// import {v4 as uuid4} from 'uuid';
// import {toast} from 'react-toastify';
// import Router from 'next/router'
// const { TextArea } = Input;
// export default function DetialProduct(props) {
//     const [fileList,setFileList] = useState([]);
//     const nameRef = useRef(props.name);
//     const priceRef = useRef(props.price);
//     const rateRef = useRef(props.start);
//     const descriptionsRef= useRef(props.descriptions);
//     const ingredientsRef= useRef(props.ingredients);
//     const usageRef = useRef(props.usage);
//     const heedRef = useRef(props.heed);
//     const expirydateRef = useRef(props.expirydate);
//     const evaluationRef = useRef(props.evaluation);
//     const props2 = {
//         listType: 'picture',
//         FileList: [...fileList],
//         className: 'upload-list-inline',
//         action:'http://52.255.164.213:8000/upload',   
//     };
//     useEffect(()=>{
//         let listFile= props.images.map(file=>{
//             let options = {
//                 uid:`${uuid4()}`,
//                 name:file,
//                 status:'done',
//                 url:file
//             }
//             return options ;
//         })
//         console.log(listFile);
//         setFileList(listFile);
//     },[])
//     return (
//         <Container className="contai-add">
//             <Breadcrumb>
//                 <Breadcrumb.Item>Admin</Breadcrumb.Item>
//                 <Breadcrumb.Item>Sản Phẩm</Breadcrumb.Item>
//                 <Breadcrumb.Item>{props.name}</Breadcrumb.Item>
//             </Breadcrumb>
//             <div>
//                 <span>Tên sản phẩm</span><br />
//                 <Input defaultValue={nameRef.current} ref={nameRef} />
//             </div>
//             <div>
//                 <span>Giá sản phẩm</span><br />
//                 <InputNumber defaultValue={priceRef.current}  style={{padding:0,width:200}} ref={priceRef}/>
//             </div>
//             <div>
//                 <span>Sao</span><br />
//                 <Rate ref={rateRef}  defaultValue={rateRef.current}/>
//             </div>
//             <div>
//                 <span>Chi tiết sản phẩm</span><br />
//                 <TextArea rows={4} ref={descriptionsRef}  defaultValue={descriptionsRef.current} style={{whiteSpace:"pre-line"}}/>
//             </div>
//             <div>
//                 <span>Ảnh</span><br />
//                 <Upload {...props2} FileList={ [...fileList]}  >
//                     <Button>
//                         <UploadOutlined /> Upload
//                     </Button>
//                 </Upload>
//             </div>
//             <div>
//                 <span>Thành phần</span><br />
//                 <TextArea rows={2} ref={ingredientsRef} defaultValue={ingredientsRef.current} style={{whiteSpace:"pre-line"}}/>
//             </div>
//             <div>
//                 <span>Cách sử dụng</span><br />
//                 <TextArea rows={2} ref={usageRef} defaultValue={usageRef.current} style={{whiteSpace:"pre-line"}}/>
//             </div>
//             <div>
//                 <span>Chú ý</span><br />
//                 <TextArea rows={2} ref={heedRef} defaultValue={heedRef.current}/>
//             </div>
//             <div>
//                 <span>Hàm Lượng Và Hạn sử dụng</span><br />
//                 <TextArea rows={2} ref={expirydateRef} defaultValue={expirydateRef.current} style={{whiteSpace:"pre-line"}}/>
//             </div>
//             <div>
//                 <span>Đánh giá</span><br />
//                 <TextArea rows={2} ref={evaluationRef} style={{whiteSpace:"pre-line"}}/>
//             </div>
//             <div className="submit">
//                 <Button type="primary">Cập Nhật sản Phẩm</Button>
//             </div>
//         </Container>
//     )
// }


import React, { useState, useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Button, Upload, Breadcrumb, Rate } from 'antd';
import { Form, Input, InputNumber } from 'formik-antd';
import { UploadOutlined, DeleteFilled } from '@ant-design/icons';
import { fetchAddProduct } from './../../../api/products';
import { toast } from 'react-toastify';
import { v4 as uuid4 } from 'uuid';
import Router from 'next/router'
const { TextArea } = Input;
import { Formik } from 'formik';
import * as yup from 'yup';
import Link from 'next/link';
import './style.scss';
import { ExclamationCircleOutlined } from '@ant-design/icons';
function AddProduct(props) {
    const [fileList, setFileList] = useState([]);
    const nameRef = useRef(props.name);
    const priceRef = useRef(props.price);
    const rateRef = useRef(props.start);
    const descriptionsRef = useRef(props.descriptions);
    const ingredientsRef = useRef(props.ingredients);
    const usageRef = useRef(props.usage);
    const heedRef = useRef(props.heed);
    const expirydateRef = useRef(props.expirydate);
    const evaluationRef = useRef(props.evaluation);
    const [state, setState] = useState(false)
    const props2 = {
        listType: 'picture',
        FileList: [...fileList],
        className: 'upload-list-inline',
        action: 'http://52.255.164.213:8000/upload',
    };
    useEffect(() => {
        let listFile = props.images.map(file => {
            let options = {
                uid: `${uuid4()}`,
                name: file,
                status: 'done',
                url: file
            }
            return options;
        })
        setFileList(listFile);
    }, [])
    const findIndex = (list,id) =>{
        let result = -1;
        list.forEach((element,index) => {
            result = index
        });
        return result;
    }
    const onAddProduct = () => {
        if (!fileList.length) {
            setState(true);
        }
    }
    const remotePicture = (iditem) =>{
        let index = findIndex(fileList,iditem)
        let arr = fileList.slice(index,1)
        setFileList(arr);
        console.log(arr)
    }
    return (
        <Container className="contai-add">
            <Link href="/admin"><Breadcrumb.Item>Admin</Breadcrumb.Item></Link>
            <Link href="/admin/product"><Breadcrumb.Item>Sản Phẩm</Breadcrumb.Item></Link>
            <Breadcrumb.Item className="name_P">{props.name}</Breadcrumb.Item>
            <Formik
                initialValues={{
                    nameProduct: nameRef.current,
                    priceProduct: priceRef.current,
                    descriptionsProduct: descriptionsRef.current,
                    ingredients: ingredientsRef.current,
                    usage: usageRef.current,
                    heed: heedRef.current,
                    expirydate: expirydateRef.current,
                    evaluation: evaluationRef.current,
                }}
                onSubmit={async (values, { setSubmitting }) => {

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
                                    <span htmlFor='starProduct'>Sao</span><br />
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
                                    <span>Ảnh</span><br />
                                    <Upload {...props2} >
                                        <Button>
                                            <UploadOutlined /> Upload
                                    </Button>
                                    </Upload>
                                    {
                                        fileList.map((item, index) => {
                                            return <div className="ant-upload-list-item-0" key={index}>
                                                <div className="ant-upload-list-picture-item-0">
                                                    <span>
                                                        <a className="ant-upload" href="" target="_blank" rel="noopener noreferrer">
                                                            <img className="img-fluid" src={item.name}></img>
                                                        </a>
                                                    </span>
                                                    <span className="ant-upload-list-item-card-actions picture" onClick={() => remotePicture(item.uid)}>
                                                        <DeleteFilled />
                                                    </span>
                                                </div>
                                            </div>
                                        })
                                    }
                                    {
                                        state && !fileList.length ? <span className="errors"><ExclamationCircleOutlined /> Hãy tải ảnh </span> : ''
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
                                        Cập Nhật sản Phẩm
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







