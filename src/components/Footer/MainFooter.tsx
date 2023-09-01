import { Link } from "react-router-dom";
import styles from "./mainfooter.module.scss";
import Social from "../SocialLink/Social";

const MainFooter = () => {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        <div className={styles.homeLinks}>
          <div className={styles.links}>
            <Link to="/">
              <img src="../../../images/logo.svg" alt="my team logo" />
            </Link>
            <nav>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
            </nav>
          </div>
          <div className={styles.address}>
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>Call Us : 949-833-7432</p>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <nav>
            <li>
              <Social name="facebook" image="../../../images/icon-facebook.svg"/>
            </li>
            <li>
            <Social name="pinterest" image="../../../images/icon-pinterest.svg"/>
            </li>
            <li>
            <Social name="twitter" image="../../../images/icon-twitter.svg"/>
            </li>
          </nav>
          <p>Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
