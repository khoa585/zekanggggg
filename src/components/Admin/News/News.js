import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Breadcrumb ,Table ,Space ,Button} from 'antd';
import {v4 as uuid4} from 'uuid';
import Router from 'next/router';
import {ACTION_FETCH_LIST_NEWS} from './../../../actions/newsActions';
import {fetchDeleteNews} from './../../../api/news';
import {toast} from 'react-toastify';
export default function Index(){
    const news = useSelector(state=>state.news.listnews);
    const dispatch = useDispatch();
    const goDetial= (id)=>{
        Router.push(`/admin/news/${id}`);
    }
    const onDeleteNews =async(id)=>{
        if(confirm("Bạn Muốn Xóa Tin Tức Này Không")){
            let resultDelete = await fetchDeleteNews(id);
            if(resultDelete.status==200 && resultDelete.data?.status=="success"){
                dispatch(ACTION_FETCH_LIST_NEWS())
                toast.success("Xóa Thành Công Sản Phẩm");
            }
        }
    }
    const columns = [
        {
            title: 'Tiêu Đề',
            dataIndex: 'title',
            key:`z${uuid4()}`,
            width:'20%'
        },
        {
            title: 'Mô Tả',
            key:`acvd${uuid4()}`,
            render:(data)=>{
                return(
                <div>
                    {data.description}
                </div>
                )
            }
        },
        {
            title: 'Hình Ảnh',
            key:`acvd${uuid4()}`,
            render:(data)=>{
                return(
                    <img src={data.image} style={{width:"100%"}}></img>
                )
            },
            width:'20%'
        },
        {
            title: 'Hành Động',
            key:`aacd${uuid4()}`,
            width:'20%',
            render:(data)=>{
                return(
                    <Space>
                        <Button onClick={()=>goDetial(data.id)}>Chi Tiết</Button>
                        <Button  onClick={()=>onDeleteNews(data.id)}>Xóa</Button>
                    </Space>
                )
            }
        },
        ];
    return  (
        <div>
             <Breadcrumb style={{marginBottom:30}}>
                <Breadcrumb.Item>
                    Admin
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    Danh Sách Tin Tức
                </Breadcrumb.Item>
            </Breadcrumb>
            <Table dataSource={news} columns={columns} pagination={false} rowKey='id'/>
        </div>
    )
}