import React from 'react';
import Newsz from '../components/Newsz/Newsz';
import Header from '../components/CommonComponents/Header/Header'
function News(props) {
    return (
        <div>
             <Header></Header>
            <Newsz></Newsz>
        </div>
    );
}

export default News;