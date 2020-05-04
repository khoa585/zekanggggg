import React from 'react';
import MainHome from './MainHome/MainHome';
import ProductItem from './ProductItem/ProductItem';
import News from './News/News';
function Home() {
    return (
        <React.Fragment>
            <MainHome></MainHome>
            <ProductItem></ProductItem>
            <News></News>
        </React.Fragment>
    );
}

export default Home;