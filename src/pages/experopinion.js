import React from 'react';
import Experopinion from '../components/Experopinion/Experopinion';
import Header from '../components/CommonComponents/Header/Header';
import Footer from '../components/CommonComponents/Footer/Footer';
function experopinion(props) {
    return (
        <React.Fragment>
            <Header></Header>
            <Experopinion></Experopinion>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default experopinion;