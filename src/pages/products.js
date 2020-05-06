import React from 'react';
import Products from '../components/Products/Products';
import Header from '../components/CommonComponents/Header/Header'
import Footer from '../components/CommonComponents/Footer/Footer';
function products(props) {
    return (
        <div>
            <Header></Header>
            <Products></Products>
            <Footer></Footer>

        </div>
    );
}

export default products;