import React from 'react';
import Header from '../../components/CommonComponents/Header/Header';
import Footer from '../../components/CommonComponents/Footer/Footer';
import DescProduct from '../../components/DescProduct/DescProduct';
function nameproduct(props) {
    return (
        <React.Fragment>
            <Header></Header>
            <DescProduct></DescProduct>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default nameproduct;