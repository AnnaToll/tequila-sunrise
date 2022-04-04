import '../styles/globals.css'
import { wrapper } from '../redux/store';
import Header from '../components/Header';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { useStore } from 'react-redux';


function MyApp({ Component, pageProps }) {

  const store = useStore();

  return (
    <PersistGate loading={null} persistor={store._persistor}>
      <Header />
      <Component {...pageProps} />
    </PersistGate>

  );
}

export default wrapper.withRedux(MyApp);


