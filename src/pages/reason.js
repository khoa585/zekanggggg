import React from 'react';
import Header from '../components/CommonComponents/Header/Header'
import Footer from '../components/CommonComponents/Footer/Footer';
import Reason from '../components/Reason/Reason';
import { fetchGetDetialNew } from './../api/news';
import HeaderTag from './../components/CommonComponents/HeaderTag/HeaderTag';
import { fetchListProduct } from './../api/products';
function reason(props) {
    const {title,image,description} = props[0]
    return (
        <React.Fragment>
            <HeaderTag title={title} image={image} description={description}></HeaderTag>
            <Header></Header>
            <Reason {...props}></Reason>
            <Footer></Footer>
        </React.Fragment>
    );
}
reason.getInitialProps = async ({ ctx }) => {
    const { query } = ctx;
    const resultFetchData = await fetchGetDetialNew(query.id)
    let resultFetch = await fetchListProduct(1, 4);
    if (resultFetchData?.data?.data && resultFetch?.data?.data) {
        return [{ ...resultFetchData.data.data }, [...resultFetch.data.data]]
    }
}
export default reason;