import React ,{useState,useRef} from 'react';
import dynamic from 'next/dynamic';
import { Input, Button, Upload ,Breadcrumb ,InputNumber ,Rate} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Container } from 'react-bootstrap';
import {fetchAddNews} from './../../../api/news';
import {toast} from 'react-toastify';
const Ckeditor = dynamic(()=>import("./../../CommonComponents/Ckeditor/Ckeditor"),{
    ssr:false
})
import './style.scss';
const { TextArea } = Input;
export default function AddNews() {
    const [content,setContent] = useState("");
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
    const onAddNews = async()=>{
        let data = {
            title:titleRef.current.state.value,
            description:desRef.current.state.value,
            image:fileList[0]?.url,
            html:content
        }
        let resultAdd= await fetchAddNews(data);
        if(resultAdd.status==200 && resultAdd.data?.status=="success"){
            toast.success("Tạo Thành Công Sản Phẩm");
            Router.push("/admin/news");
        }else {
            toast.error("Có Lỗi Xảy Ra Khi Tạo");
        }
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
                <Input  ref={titleRef} />
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
                <Button type="primary" onClick={onAddNews}>Thêm Tin Tức</Button>
            </div>
        </Container>
    )
}
