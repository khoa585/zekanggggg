import '../components/Experopinion/style.scss';
import '../components/Admin/Product/style.scss';
import '../components/Admin/DashBoard/style.scss';
import '../components/Admin/Login/style.scss';
import '../components/Admin/News/style.scss';
import '../components/CommonComponents/BackToTop/style.scss';
import '../components/CommonComponents/ContactFast/style.scss';
import '../components/CommonComponents/Footer/Footer.scss';
import '../components/CommonComponents/Header/Header.scss';
import '../components/Contact/style.scss';
import '../components/DescProduct/style.scss';
import '../components/Introduce/style.scss';
import '../components/Newsz/style.scss';
import '../components/Experopinion/style.scss';
import '../components/Home/MainHome/style.scss'
import '../components/Home/News/style.scss';
import '../components/Home/ProductItem/style.scss';
import '../components/Products/style.scss';
import '../components/Reason/style.scss';
import 'swiper/css/swiper.css';
import "antd/dist/antd.css";
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from './../store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps, store  }) {
    return (
      <Provider store={store}>
          <Component {...pageProps} />
          <ToastContainer />
      </Provider>
      )
  }
  MyApp.getInitialProps = async ({ Component, ctx })=>{
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps }
  }
  export default withRedux(createStore)(withReduxSaga(MyApp));