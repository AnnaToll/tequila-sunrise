import '../styles/globals.css'
import { wrapper } from '../redux/store';
import Header from '../components/Header';
import { useStore } from 'react-redux';
import CookiesAndPersist from '../components/CookiesAndPersist';
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {

  const store = useStore();

  return (
    <CookiesAndPersist loading={null} persistor={store._persistor}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </CookiesAndPersist>
  );
}

export default wrapper.withRedux(MyApp);


