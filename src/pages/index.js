import Head from 'next/head'
import Header from '../components/CommonComponents/Header/Header'
import Home from '../components/Home/Home'
import Footer from '../components/CommonComponents/Footer/Footer';
import HeaderTag from './../components/CommonComponents/HeaderTag/HeaderTag';
import { fetchListNews } from './../api/news';
import { fetchListProduct } from './../api/products';
function Index(props) {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="../../favicon.ico" />
      </Head>
      <HeaderTag />
      <main>
        <Header></Header>
        <Home {...props}></Home>
        <Footer></Footer>
      </main>
    </React.Fragment>
  )
}
Index.getInitialProps = async () => {
  let [resultFetchData, resultFetch] = await Promise.all([fetchListNews(1, 4), fetchListProduct(1, 4)])
  if (resultFetchData?.data?.data && resultFetch?.data?.data) {
      return [[...resultFetchData.data.data], [...resultFetch.data.data]];
  }
}
export default Index;