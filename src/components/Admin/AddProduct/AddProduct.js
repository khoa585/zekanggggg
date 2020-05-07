import React from 'react';
import { Container } from 'react-bootstrap';
import { Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './style.scss';
function AddProduct(props) {

    const fileList = [

    ];

    const props2 = {
        listType: 'picture',
        defaultFileList: [...fileList],
        className: 'upload-list-inline',
    };

    return (
        <Container className="contai-add">
            <div>
                <span>Tên sản phẩm</span><br />
                <Input placeholder="Tên sản phẩm" />
            </div>
            <div>
                <span>Giá sản phẩm</span><br />
                <Input placeholder="Giá sản phẩm" />
            </div>
            <div>
                <span>Sao</span><br />
                <Input placeholder="Sao" />
            </div>
            <div>
                <span>Chi tiết sản phẩm</span><br />
                <Input placeholder="Chi tiết sản phẩm" />
            </div>
            <div>
                <span>Ảnh</span><br />
                <Upload {...props2}>
                    <Button>
                        <UploadOutlined /> Upload
                    </Button>
                </Upload>
            </div>
            <div>
                <span>Thành phần</span><br />
                <Input placeholder="Thành phần" />
            </div>
            <div>
                <span>Cách sử dụng</span><br />
                <Input placeholder="Cách sử dụng" />
            </div>
            <div>
                <span>Chú ý</span><br />
                <Input placeholder="Chú ý" />
            </div>
            <div>
                <span>Hạn sử dụng</span><br />
                <Input placeholder="Hạn sử dụng" />
            </div>
            <div>
                <span>Đánh giá</span><br />
                <Input placeholder="Đánh giá" />
            </div>
            <div className="submit">
                <Button type="primary">Submit</Button>
            </div>
        </Container>
    );
}

export default AddProduct;


