import React from 'react';
import DoashBoard from './../../../components/Admin/DashBoard/DashBoard';
import AddProduct from '../../../components/Admin/Product/AddProduct';
function index(props) {
    return (
        <DoashBoard>
            <AddProduct/>
        </DoashBoard>
    );
}

export default index;