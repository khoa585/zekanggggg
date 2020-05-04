import Head from 'next/head'
import Header from '../components/CommonComponents/Header/Header'
import Home from '../components/Home/Home'
import Footer from '../components/CommonComponents/Footer/Footer'
export default function Index() {
  return (
    <React.StrictMode>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <main>
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </main>
    </React.StrictMode>
  )
}
