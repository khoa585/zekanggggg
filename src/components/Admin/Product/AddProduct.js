import React ,{useState ,useRef} from 'react';
import { Container } from 'react-bootstrap';
import { Input, Button, Upload ,Breadcrumb ,InputNumber ,Rate} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {fetchAddProduct} from './../../../api/products';
import {toast} from 'react-toastify';
import Router from 'next/router'
const { TextArea } = Input;
import './style.scss';
function AddProduct(props) {
    const [fileList,setFileList] = useState([]);
    const props2 = {
        listType: 'picture',
        FileList: [...fileList],
        className: 'upload-list-inline',
        action:'http://52.255.164.213:8000/upload',   
    };
    const nameRef = useRef("");
    const priceRef = useRef(0);
    const rateRef = useRef(5);
    const descriptionsRef= useRef("");
    const ingredientsRef= useRef("");
    const usageRef = useRef("");
    const heedRef = useRef("");
    const expirydateRef = useRef("");
    const evaluationRef = useRef("");
    const onChangeUpload=(info)=>{
        let filesList=[...info.fileList];
        console.log(filesList);
        filesList = filesList.map((file)=>{
            if (file.response) {
                // Component will show file.url as link
                file.url = file.response.data.url;
              }
              return file;
        })
        setFileList(filesList);
    }
    const onAddProduct =async ()=>{
        let images = fileList.map(file=>{
            return file.url ;
        })
        let data = {
            name:nameRef.current.state.value,
            price:priceRef.current.state.value ,
            images:images,
            start:rateRef.current.state.value ,
            descriptions:descriptionsRef.current.state.value,
            ingredients:ingredientsRef.current.state.value,
            usage:usageRef.current.state.value,
            heed:heedRef.current.state.value,
            expirydate:expirydateRef.current.state.value,
            evaluation:evaluationRef.current.state.value
        }
        let resultAdd= await fetchAddProduct(data);
        if(resultAdd.status==200 && resultAdd.data?.status=="success"){
            toast.success("Tạo Thành Công Sản Phẩm");
            nameRef.current.state.value= "";
            priceRef.current.state.value=0;
            rateRef.current.state.value=5 ;
            setFileList([]);
            descriptionsRef.current.state.value="";
            ingredientsRef.current.state.value=""
            expirydateRef.current.state.value=""
            evaluationRef.current.state.value=""
            Router.push("/admin/product");
        }
        else {
            toast.error("Có Lỗi Xảy Ra Khi Tạo");
        }
    }
    return (
        <Container className="contai-add">
            <Breadcrumb>
                <Breadcrumb.Item>Admin</Breadcrumb.Item>
                <Breadcrumb.Item>Sản Phẩm</Breadcrumb.Item>
                <Breadcrumb.Item>Thêm Sản Phẩm</Breadcrumb.Item>
            </Breadcrumb>
            <div>
                <span>Tên sản phẩm</span><br />
                <Input value={nameRef.current.value??nameRef.current.state?.value} ref={nameRef} />
            </div>
            <div>
                <span>Giá sản phẩm</span><br />
                <InputNumber defaultValue={0}  style={{padding:0,width:200}} ref={priceRef}/>
            </div>
            <div>
                <span>Sao</span><br />
                <Rate ref={rateRef}  defaultValue={5}/>
            </div>
            <div>
                <span>Chi tiết sản phẩm</span><br />
                <TextArea rows={4} ref={descriptionsRef} style={{whiteSpace:"pre-line"}}/>
            </div>
            <div>
                <span>Ảnh</span><br />
                <Upload {...props2} onChange={onChangeUpload}  >
                    <Button>
                        <UploadOutlined /> Upload
                    </Button>
                </Upload>
            </div>
            <div>
                <span>Thành phần</span><br />
                <TextArea rows={2} ref={ingredientsRef} style={{whiteSpace:"pre-line"}}/>
            </div>
            <div>
                <span>Cách sử dụng</span><br />
                <TextArea rows={2} ref={usageRef} style={{whiteSpace:"pre-line"}}/>
            </div>
            <div>
                <span>Chú ý</span><br />
                <TextArea rows={2} ref={heedRef} style={{whiteSpace:"pre-line"}}/>
            </div>
            <div>
                <span>Hàm Lượng Và Hạn sử dụng</span><br />
                <TextArea rows={2} ref={expirydateRef} style={{whiteSpace:"pre-line"}}/>
            </div>
            <div>
                <span>Đánh giá</span><br />
                <TextArea rows={2} ref={evaluationRef} style={{whiteSpace:"pre-line"}}/>
            </div>
            <div className="submit">
                <Button type="primary" onClick={onAddProduct}>Thêm Sản Phẩm</Button>
            </div>
        </Container>
    );
}

export default AddProduct;


