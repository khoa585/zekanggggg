import React from 'react';
import Header from '../components/CommonComponents/Header/Header';
import Footer from '../components/CommonComponents/Footer/Footer';
import DescProduct from '../components/DescProduct/DescProduct';
function DescProducts(props) {
    return (
        <div>
            <Header></Header>
            <DescProduct></DescProduct>
            <Footer></Footer>
        </div>
    );
}

export default DescProducts;
