import React from 'react';
import Newsz from '../components/Newsz/Newsz';
import Header from '../components/CommonComponents/Header/Header'
import Footer from '../components/CommonComponents/Footer/Footer';
function News(props) {
    return (
        <React.Fragment>
             <Header></Header>
            <Newsz></Newsz>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default News;
