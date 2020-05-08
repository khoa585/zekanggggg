import React from 'react';
import DoashBoard from './../../../components/Admin/DashBoard/DashBoard';
import DetialProduct from '../../../components/Admin/Product/DetialProduct';
import {withAuthSync} from './../../../untils/auth';
import {fetchGetDetialProduct} from './../../../api/products';
function Detial(props){
    return(
        <DoashBoard>
            <DetialProduct {...props} />
        </DoashBoard>
    )
}
Detial.getInitialProps =async({query,res}) =>{
    const datarequest = await fetchGetDetialProduct(query.id);
    if(datarequest?.data?.data){
        return {...datarequest.data.data};
    }
    res.writeHead(302, { Location: '/admin/product' })
    res.end()
    
}
export default withAuthSync(Detial);