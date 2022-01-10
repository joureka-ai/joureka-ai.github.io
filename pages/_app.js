import Layout from '../components/Layout/Layout';
import '../styles/global.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
