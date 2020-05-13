import React from 'react';
import Header from './../components/CommonComponents/Header/Header';
import Footer from './../components/CommonComponents/Footer/Footer';
import DescProduct from './../components/DescProduct/DescProduct';
import { fetchGetDetialProduct } from './../api/products';
import HeaderTag from './../components/CommonComponents/HeaderTag/HeaderTag';
import { fetchListProduct } from './../api/products';
function nameproduct(props) {
    const { descriptions, images,name } = props[0]
    return (
        <React.Fragment>
            <HeaderTag title={name} image={images[0]} description={descriptions}/>
            <Header></Header>
            <DescProduct {...props}></DescProduct>
            <Footer></Footer>
        </React.Fragment>
    );
}
nameproduct.getInitialProps = async ({ ctx }) => {
    const { query } = ctx;
    const resultFetchData = await fetchGetDetialProduct(query.id)
    let resultFetch = await fetchListProduct(1, 4);
    if (resultFetchData?.data?.data && resultFetch?.data?.data) {
        return [{ ...resultFetchData.data.data }, [...resultFetch.data.data]];
    }
}

export default nameproduct;