import '../styles/globals.css'
import { wrapper } from '../redux/store';
import Header from '../components/Header';
import { useStore } from 'react-redux';
import Footer from '../components/Footer'
import { PersistGate } from 'redux-persist/lib/integration/react';

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


