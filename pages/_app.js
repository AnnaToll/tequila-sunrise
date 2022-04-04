import '../styles/globals.css'
import { wrapper } from '../redux/store';
import Header from '../components/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../components/Footer';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { useStore } from 'react-redux';

function MyApp({ Component, pageProps }) {

  const store = useStore();

  return (
    <PersistGate loading={null} persistor={store._persistor}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </PersistGate>

  );
}

export default wrapper.withRedux(MyApp);

/* function MyApp({ Component, pageProps }) {

  const dispatch = useDispatch();

  // useEffect(() => {

  // const currentState = typeof window !== "undefined" && localStorage.getItem("store") ?
  //   JSON.parse(localStorage.getItem("store")) : []
  // const currentState = localStorage.getItem("store");

  // if (typeof window !== "undefined" && localStorage.getItem("store")) {
  //   const currentState = JSON.parse(localStorage.getItem("store"));
  //   dispatch({
  //     type: 'SET_CURRENT_STATE',
  //     store: currentState
  //   })
  // }

  // })

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default wrapper.withRedux(MyApp); */
