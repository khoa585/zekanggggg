import Head from 'next/head'
import Header from '../components/CommonComponents/Header/Header'
import Home from '../components/Home/Home'
import Footer from '../components/CommonComponents/Footer/Footer';
import HeaderTag from './../components/CommonComponents/HeaderTag/HeaderTag';
import { fetchListProduct } from './../api/products';
function Index(props) {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <HeaderTag {...props[0]}/>
      <main>
        <Header></Header>
        <Home List={props[0]}></Home>
        <Footer></Footer>
      </main>
    </React.Fragment>
  )
}
Index.getInitialProps = async (ctx) => {
  try {
    let resultFetch = await fetchListProduct(1,4);
    if (resultFetch?.data?.data) {
      let data = resultFetch.data.data;
      return [data];
    }
  } catch (error) {
    console.error(error);
  }
}
export default Index;