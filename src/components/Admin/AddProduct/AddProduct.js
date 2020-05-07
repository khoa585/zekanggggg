import React from 'react';
import { Container } from 'react-bootstrap';
import { Input, Button, Upload } from 'antd';
import { UploadOutlined  } from '@ant-design/icons';
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
                <Input placeholder="Basic usage" />
            </div>
            <div>
                <span>Tên sản phẩm</span><br />
                <Input placeholder="Basic usage" />
            </div>
            <div>
                <span>Tên sản phẩm</span><br />
                <Input placeholder="Basic usage" />
            </div>
            <div>
                <span>Tên sản phẩm</span><br />
                <Input placeholder="Basic usage" />
            </div>
            <div>
                <span>Tên sản phẩm</span><br />
                <Input placeholder="Basic usage" />
            </div>
            <div>
                <span>Tên sản phẩm</span><br />
                <Input placeholder="Basic usage" />
            </div>
            <div>
                <span>Tên sản phẩm</span><br />
                <Input placeholder="Basic usage" />
            </div>
            <div>
                <span>Tên sản phẩm</span><br />
                <Input placeholder="Basic usage" />
            </div>
            <div className="clearfix">
                <div>
                    <Upload {...props2}>
                        <Button>
                            <UploadOutlined /> Upload
                        </Button>
                    </Upload>
                </div>,

            </div>
            <div className="submit">
                <Button type="primary">Primary</Button>
            </div>
        </Container>
    );
}

export default AddProduct;


