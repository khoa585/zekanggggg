import React from 'react';
import DoashBoard from './../../../components/Admin/DashBoard/DashBoard';
import AddProduct from '../../../components/Admin/AddProduct/AddProduct';
function index(props) {
    return (
        <DoashBoard>
            <AddProduct></AddProduct>
        </DoashBoard>
    );
}

export default index;