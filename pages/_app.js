import Layout from '../components/Layout/Layout';
import '../styles/global.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import React, {useEffect} from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
