import React from 'react';
import Newsz from '../components/Newsz/Newsz';
import Header from '../components/CommonComponents/Header/Header'
import Footer from '../components/CommonComponents/Footer/Footer';
import { fetchGetDetialNew } from './../api/news';
function News(props) {
    console.log(props)
    return (
        <React.Fragment>
             <Header></Header>
            <Newsz></Newsz>
            <Footer></Footer>
        </React.Fragment>
    );
}
News.getInitialProps = async () => {
    const resultFetchData = await fetchGetDetialNew()
    if (resultFetchData?.data?.data ) {
        return { ...resultFetchData.data.data }
    }
}
export default News;
