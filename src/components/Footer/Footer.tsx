import { useLocation } from "react-router-dom";
import ContactFooter from "./ContactFooter";
import MainFooter from "./MainFooter";
import styles from "./footer.module.scss";

const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname.startsWith("/contact");

  return (
    <footer className={styles.container}>
      {!isContactPage && <ContactFooter />}
      <MainFooter />
    </footer>
  );
};

export default Footer;
