import '../styles/globals.css'
import { wrapper } from '../redux/store';
import Header from '../components/Header';
import { useStore } from 'react-redux';
import CookiesAndPersist from '../components/CookiesAndPersist';

function MyApp({ Component, pageProps }) {

  const store = useStore();

  return (
    <CookiesAndPersist loading={null} persistor={store._persistor}>
      <Header />
      <Component {...pageProps} />
    </CookiesAndPersist>

  );
}

export default wrapper.withRedux(MyApp);


