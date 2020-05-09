import React ,{useState} from 'react';
import dynamic from 'next/dynamic';
import { Input, Button, Upload ,Breadcrumb ,InputNumber ,Rate} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Container } from 'react-bootstrap';
const Ckeditor = dynamic(()=>import("./../../CommonComponents/Ckeditor/Ckeditor"),{
    ssr:false
})
import './style.scss';
const { TextArea } = Input;
export default function AddNews() {
    const [content,setContent] = useState("Phong");
    const onEditorChange = (evt)=>{
        console.log(evt.editor.getData())
    }
    return (
        <Container className="contai-add">
            <Breadcrumb>
                <Breadcrumb.Item>Admin</Breadcrumb.Item>
                <Breadcrumb.Item>Tin Tức</Breadcrumb.Item>
                <Breadcrumb.Item>Thêm Tin Tức</Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <span>Tiêu Đề</span><br />
                <Input  />
            </div>
            <div>
                <span>Mô Tả</span><br />
                <TextArea  rows={3}/>
            </div>
            <div>
                <span>Ảnh</span><br />
                <Upload  >
                    <Button>
                        <UploadOutlined /> Upload
                    </Button>
                </Upload>
            </div>
            <div>
                <div>Nội Dung</div>
                <Ckeditor 
                    data={content}
                    onchange={onEditorChange}
                />
            </div>
        </Container>
    )
}
