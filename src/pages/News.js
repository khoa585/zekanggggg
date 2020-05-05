import React from 'react';
import Newsz from '../components/Newsz/Newsz';
import Header from '../components/CommonComponents/Header/Header'
import Footer from '../components/CommonComponents/Footer/Footer';
function News(props) {
    return (
        <div>
             <Header></Header>
            <Newsz></Newsz>
            <Footer></Footer>
        </div>
    );
}

export default News;