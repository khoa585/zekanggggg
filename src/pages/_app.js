import '../components/Introduce/style.scss'
import '../components/CommonComponents/Footer/Footer.scss'
import '../components/CommonComponents/Header/Header.scss'
import '../components/Newsz/style.scss'
import '../components/DescProduct/style.scss'
import '../components/Contact/style.scss';
import '../components/Experopinion/style.scss'
import '../components/Admin/Product/style.scss'
import "antd/dist/antd.css"
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
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