import React from 'react';
import Experopinion from '../components/Experopinion/Experopinion';
import Header from '../components/CommonComponents/Header/Header';
import Footer from '../components/CommonComponents/Footer/Footer';
import HeaderTag from './../components/CommonComponents/HeaderTag/HeaderTag';
function experopinion(props) {
    return (
        <React.Fragment>
            <HeaderTag />
            <Header></Header>
            <Experopinion></Experopinion>
            <Footer></Footer>
        </React.Fragment>
    );
}
export default experopinion;