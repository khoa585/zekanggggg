import React from 'react';
import Head from 'next/head';
import Introduce from '../components/Introduce/Introduce';
import Header from "../components/CommonComponents/Header/Header";
import Footer from "../components/CommonComponents/Footer/Footer";
import MainHome from '../components/Home/MainHome/MainHome';
import HeaderTag from './../components/CommonComponents/HeaderTag/HeaderTag';
function introduces(props) {
    return (
        <React.Fragment>
                <Head>
                    <title>Về Công Ty chúng Tôi</title>
                </Head>
                <HeaderTag />
                <Header></Header>
                <MainHome></MainHome>
                <Introduce></Introduce>
                <Footer></Footer>
        </React.Fragment>
    );
}

export default introduces;
