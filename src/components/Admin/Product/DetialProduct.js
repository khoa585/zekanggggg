import React ,{useState ,useRef} from 'react';
import { Container } from 'react-bootstrap';
import { Input, Button, Upload ,Breadcrumb ,InputNumber ,Rate} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {fetchAddProduct} from './../../../api/products';
import {toast} from 'react-toastify';
import Router from 'next/router'
const { TextArea } = Input;
export default function DetialProduct(props) {
    const props2 = {
        listType: 'picture',
        FileList: [],
        className: 'upload-list-inline',
        action:'http://52.255.164.213:8000/upload',   
    };
    const nameRef = useRef(props.name);
    const priceRef = useRef(props.price);
    const rateRef = useRef(props.start);
    const descriptionsRef= useRef(props.descriptions);
    const ingredientsRef= useRef(props.ingredients);
    const usageRef = useRef(props.usage);
    const heedRef = useRef(props.heed);
    const expirydateRef = useRef(props.expirydate);
    const evaluationRef = useRef(props.evaluation);
    return (
        <Container className="contai-add">
            <Breadcrumb>
                <Breadcrumb.Item>Admin</Breadcrumb.Item>
                <Breadcrumb.Item>Sản Phẩm</Breadcrumb.Item>
                <Breadcrumb.Item>{props.name}</Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <span>Tên sản phẩm</span><br />
                <Input defaultValue={nameRef.current} ref={nameRef} />
            </div>
            <div>
                <span>Giá sản phẩm</span><br />
                <InputNumber defaultValue={priceRef.current}  style={{padding:0,width:200}} ref={priceRef}/>
            </div>
            <div>
                <span>Sao</span><br />
                <Rate ref={rateRef}  defaultValue={rateRef.current}/>
            </div>
            <div>
                <span>Chi tiết sản phẩm</span><br />
                <TextArea rows={4} ref={descriptionsRef}  defaultValue={descriptionsRef.current}/>
            </div>
            <div>
                <span>Ảnh</span><br />
                <Upload {...props2}   >
                    <Button>
                        <UploadOutlined /> Upload
                    </Button>
                </Upload>
            </div>
            <div>
                <span>Thành phần</span><br />
                <TextArea rows={2} ref={ingredientsRef} defaultValue={ingredientsRef.current}/>
            </div>
            <div>
                <span>Cách sử dụng</span><br />
                <TextArea rows={2} ref={usageRef} defaultValue={usageRef.current}/>
            </div>
            <div>
                <span>Chú ý</span><br />
                <TextArea rows={2} ref={heedRef} defaultValue={heedRef.current}/>
            </div>
            <div>
                <span>Hàm Lượng Và Hạn sử dụng</span><br />
                <TextArea rows={2} ref={expirydateRef} defaultValue={expirydateRef.current} />
            </div>
            <div>
                <span>Đánh giá</span><br />
                <TextArea rows={2} ref={evaluationRef}/>
            </div>
            <div className="submit">
                <Button type="primary">Cập Nhật sản Phẩm</Button>
            </div>
        </Container>
    )
}
