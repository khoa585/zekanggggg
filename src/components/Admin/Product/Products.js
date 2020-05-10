import React from 'react';
import {useSelector} from 'react-redux';
import { Breadcrumb ,Table ,Space ,Button} from 'antd';
import {v4 as uuid4} from 'uuid';
import Router from 'next/router';
import { useDispatch } from 'react-redux';
import * as ActionDeleteProduct from '../../../actions/productsAction'
export default function Products() {
    const products = useSelector(state=>state.products.listproducts);
    const dispatch = useDispatch()
    const goDetial= (id)=>{
        Router.push(`/admin/product/${id}`);
    }
    const deleteProduct = async (id) =>{
        if(confirm("Bạn Muốn Xóa Sản phẩm Này Không")){
            let {ACTION_DELETE_PRODUCT} = ActionDeleteProduct;
            dispatch(ACTION_DELETE_PRODUCT(id))
        }
    }
    const columns = [
    {
        title: 'Tên',
        dataIndex: 'name',
        key:`z${uuid4()}`
    },
    {
        title: 'Giá',
        dataIndex: 'price',
        key:`accd${uuid4()}`
    },
    {
        title: 'Mô Tả',
        dataIndex: 'descriptions',
        key:`acvd${uuid4()}`
    },
    {
        title: 'Hành Động',
        key:`aacd${uuid4()}`,
        width:'20%',
        render:(data)=>{
            return(
                <Space>
                    <Button onClick={()=>goDetial(data.id)}>Chi Tiết</Button>
                    <Button onClick={()=>deleteProduct(data.id)}>Xóa</Button>
                </Space>
            )
        }
    },
    ];
    return (
        <div>
            <Breadcrumb style={{marginBottom:30}}>
                <Breadcrumb.Item>
                    Admin
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    Danh Sách Sản Phẩm
                </Breadcrumb.Item>
            </Breadcrumb>
            <Table dataSource={products} columns={columns} pagination={false} rowKey='id'/>
        </div>
    )
}
