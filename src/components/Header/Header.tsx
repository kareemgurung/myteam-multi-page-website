import { Link, useNavigate } from "react-router-dom";
import styles from "./header.module.scss";
import { useState } from "react";
import Button from "../Button/Button";

const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link to="/" className={styles.logo}>
          <img src="../../../images/logo.svg" alt="my team logo" />
        </Link>
        <button
          type="button"
          aria-label="show menu button"
          className={styles.iconButton}
          onClick={() => showMenuHandler()}
        >
          <img src="../../../images/icon-hamburger.svg" alt="hamburger icon" />
        </button>
        <div
          className={
            showMenu
              ? `${styles.container} ${styles.active}`
              : `${styles.container}`
          }
        >
          <button
            type="button"
            aria-label="close menu button"
            className={`${styles.iconButton} ${styles.closeButton}`}
            onClick={() => showMenuHandler()}
          >
            <img src="../../../images/icon-close.svg" alt="hamburger icon" />
          </button>
          <ul>
            <li>
              <Link to="/" onClick={() => showMenuHandler()}>
                home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => showMenuHandler()}>
                about
              </Link>
            </li>
          </ul>
          <Button
            onClick={() => {
              navigate("/contact");
              showMenuHandler();
            }}
            name="contact us"
            color="light"
            typeOfButton="button"
          />
        </div>
        <div
          className={
            showMenu
              ? `${styles.backdrop} ${styles.showBackdrop}`
              : `${styles.backdrop}`
          }
        ></div>
      </div>
    </header>
  );
};

export default Header;
