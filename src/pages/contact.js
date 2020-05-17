import React from 'react';
import Contact from '../components/Contact/Contact';
import Header from '../components/CommonComponents/Header/Header';
import Footer from '../components/CommonComponents/Footer/Footer';
import HeaderTag from './../components/CommonComponents/HeaderTag/HeaderTag';
function DescProducts(props) {
    return (
        <React.Fragment>
             <HeaderTag />
            <Header></Header>
            <Contact></Contact>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default DescProducts;
