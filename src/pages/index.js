import Head from 'next/head'
import Header from '../components/CommonComponents/Header/Header'
import Home from '../components/Home/Home'
import Footer from '../components/CommonComponents/Footer/Footer';
import HeaderTag from './../components/CommonComponents/HeaderTag/HeaderTag';
import {fetchListProduct} from './../api/products';
function Index(props) {
  return (
    <React.StrictMode>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <HeaderTag {...props}/>
      <main>
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </main>
    </React.StrictMode>
  )
}
// Index.getInitialProps = async(ctx)=>{
//   try {
//       let resultFetch = await fetchListProduct();
//       console.log(resultFetch.data);
//   } catch (error) {
//       console.error(error);
//   }
// }
export default Index ;