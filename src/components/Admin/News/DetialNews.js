import React ,{useState,useRef} from 'react';
import dynamic from 'next/dynamic';
import { Input, Button, Upload ,Breadcrumb ,InputNumber ,Rate} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Container } from 'react-bootstrap';
import {fetchAddNews} from '../../../api/news';
import {toast} from 'react-toastify';
import Router from 'next/router';
const { TextArea } = Input;
const Ckeditor = dynamic(()=>import("../../CommonComponents/Ckeditor/Ckeditor"),{
    ssr:false
})
import './style.scss';
export default function Detial(props){
    const [content,setContent] = useState(props.html);
    const titleRef = useRef();
    const desRef = useRef();
    const [fileList,setFileList] = useState([]);
    const props2 = {
        listType: 'picture',
        FileList: [...fileList],
        className: 'upload-list-inline',
        action:'http://52.255.164.213:8000/upload',   
    };
    const onEditorChange = (evt)=>{
        setContent(evt.editor.getData());
    }
    const onUpdateNews =()=>{

    }
    const onChangeUpload=(info)=>{
        let filesList=[...info.fileList];
        filesList = filesList.slice(-1);
        filesList = filesList.map((file)=>{
            if (file.response) {
                // Component will show file.url as link
                file.url = file.response.data.url;
              }
              return file;
        })
        setFileList(filesList);
    }
    return(
        <Container className="contai-add">
            <Breadcrumb>
                <Breadcrumb.Item>Admin</Breadcrumb.Item>
                <Breadcrumb.Item>Tin Tức</Breadcrumb.Item>
                <Breadcrumb.Item>Thêm Tin Tức</Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <span>Tiêu Đề</span><br />
                <Input  ref={titleRef}  value={props?.title}/>
            </div>
            <div>
                <span>Mô Tả</span><br />
                <TextArea  rows={3} ref={desRef}/>
            </div>
            <div>
                <span>Ảnh</span><br />
                <Upload  {...props2} onChange={onChangeUpload}>
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
            <div className="submit">
                <Button type="primary" onClick={onUpdateNews}>Cập Nhật Tin Tức</Button>
            </div>
        </Container>
    )
}