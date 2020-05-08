import React from 'react';
import DoashBoard from './../../../components/Admin/DashBoard/DashBoard';
import AddProduct from '../../../components/Admin/Product/AddProduct';
import {withAuthSync} from './../../../untils/auth';
function index(props) {
    return (
        <DoashBoard>
            <AddProduct/>
        </DoashBoard>
    );
}

export default withAuthSync(index);