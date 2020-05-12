import React from 'react';
import MainHome from './MainHome/MainHome';
import ProductItem from './ProductItem/ProductItem';
import News from './News/News';
function Home(props) {
    const {List} = props
    return (
        <React.Fragment>
            <MainHome></MainHome>
            <ProductItem List={List}></ProductItem>
            <News></News>
        </React.Fragment>
    );
}

export default Home;