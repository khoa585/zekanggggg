import React from 'react';
import Header from '../components/CommonComponents/Header/Header'
import Footer from '../components/CommonComponents/Footer/Footer';
import Reason from '../components/Reason/Reason';
function reason(props) {
    return (
        <React.Fragment>
            <Header></Header>
            <Reason></Reason>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default reason;