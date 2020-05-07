import React from 'react';
import { Container } from 'react-bootstrap';
import { Input, Button, Upload ,Breadcrumb ,InputNumber ,Rate} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { TextArea } = Input;
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
            <Breadcrumb>
                <Breadcrumb.Item>Admin</Breadcrumb.Item>
                <Breadcrumb.Item>Sản Phẩm</Breadcrumb.Item>
                <Breadcrumb.Item>Thêm Sản Phẩm</Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <span>Tên sản phẩm</span><br />
                <Input placeholder="Tên sản phẩm" />
            </div>
            <div>
                <span>Giá sản phẩm</span><br />
                <InputNumber defaultValue={0}  style={{padding:0,width:200}}/>
            </div>
            <div>
                <span>Sao</span><br />
                <Rate defaultValue={5} />
            </div>
            <div>
                <span>Chi tiết sản phẩm</span><br />
                <TextArea rows={4} />
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
                <TextArea rows={2} />
            </div>
            <div>
                <span>Cách sử dụng</span><br />
                <TextArea rows={2} />
            </div>
            <div>
                <span>Chú ý</span><br />
                <TextArea rows={2} />
            </div>
            <div>
                <span>Hạn sử dụng</span><br />
                <TextArea rows={2} />
            </div>
            <div>
                <span>Đánh giá</span><br />
                <TextArea rows={2} />
            </div>
            <div className="submit">
                <Button type="primary">Submit</Button>
            </div>
        </Container>
    );
}

export default AddProduct;


