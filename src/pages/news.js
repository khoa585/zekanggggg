import React from 'react';
import Newsz from '../components/Newsz/Newsz';
import Header from '../components/CommonComponents/Header/Header'
import Footer from '../components/CommonComponents/Footer/Footer';
import { fetchListNews } from './../api/news';
import { fetchListProduct } from './../api/products';
function News(props) {
    return (
        <React.Fragment>
            <Header></Header>
            <Newsz {...props}></Newsz>
            <Footer></Footer>
        </React.Fragment>
    );
}
News.getInitialProps = async () => {
    const resultFetchData = await fetchListNews(1, 4)
    let resultFetch = await fetchListProduct(1, 4);
    if (resultFetchData?.data?.data && resultFetch?.data?.data) {
        return [[...resultFetchData.data.data], [...resultFetch.data.data]];
    }
}
export default News;
