import React from 'react';
import Head from 'next/head';
import Introduce from '../components/Introduce/Introduce';
import Header from "../components/CommonComponents/Header/Header";
import Footer from "../components/CommonComponents/Footer/Footer";
import MainHome from '../components/Home/MainHome/MainHome';
function introduces(props) {
    return (
        <div>
                <Head>
                    <title>Về Công Ty chúng Tôi</title>
                </Head>
                <Header></Header>
                <MainHome></MainHome>
                <Introduce></Introduce>
                <Footer></Footer>
        </div>
    );
}

export default introduces;
