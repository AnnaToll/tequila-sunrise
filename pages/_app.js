import '../styles/globals.css'
import { wrapper } from '../redux/store';
import Header from '../components/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function MyApp({ Component, pageProps }) { 

  const dispatch = useDispatch();

  useEffect(() => {

    const currentState = localStorage.getItem("store");

    if (currentState) {
      dispatch({
        type: 'SET_CURRENT_STATE',
        store: currentState
      })
    }

  })

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </> 
  );
}

export default wrapper.withRedux(MyApp);
