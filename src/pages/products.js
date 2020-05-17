import React from 'react';
import Products from '../components/Products/Products';
import Header from '../components/CommonComponents/Header/Header'
import Footer from '../components/CommonComponents/Footer/Footer';
import HeaderTag from './../components/CommonComponents/HeaderTag/HeaderTag';
import { fetchListProduct } from './../api/products';
function products(props) {
  return (
    <React.Fragment>
      <HeaderTag />
      <Header></Header>
      <Products List={props[0]}></Products>
      <Footer></Footer>
    </React.Fragment>
  );
}
products.getInitialProps = async () => {
  try {
    let resultFetch = await fetchListProduct();
    if (resultFetch?.data?.data) {
      let data = resultFetch.data.data;
      return [data];
    }
  } catch (error) {
    return error;
  }
}
export default products;