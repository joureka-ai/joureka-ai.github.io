import styles from "./Layout.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {

  return (
    <div>
      <Header/>
      <div className={styles.mainContainer}>{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;
