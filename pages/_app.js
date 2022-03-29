import '../styles/globals.css'
import { wrapper } from '../redux/store';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) { 

  return (
    <>
    <Header />
      <Component {...pageProps} />
      </> 
       );
}

export default wrapper.withRedux(MyApp);
