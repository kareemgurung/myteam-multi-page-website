
import styles from "./profile.module.scss";
import React, { useEffect, useState } from "react";
import Social from "../SocialLink/Social";

type ProfileProps = {
  name: string;
  quote: string;
  position: string;
  image: string;
};

const Profile: React.FC<ProfileProps> = ({ name, quote, position, image }) => {
  const [showQuote, setShowQuote] = useState(false);


  const quoteHandler = () => {
    setShowQuote((prevState) => !prevState);
  };
  return (
    <article className={styles.container}>
      {!showQuote && (
        <div className={styles.profile}>
          <img src={image} alt="avatar" />
          <div>
            <h4>{name}</h4>
            <p>{position}</p>
          </div>
        </div>
      )}
      {showQuote && (
        <div className={styles.quotes}>
          <div className={styles.quote}>
            <h4>{name}</h4>
            <p>{quote}</p>
          </div>
          <div className={styles.socials}>
            <Social image="../../../images/icon-twitter.svg" name="twitter"/>
            <Social image="../../../images/icon-linkedin.svg" name="linkedin"/>
          </div>
        </div>
      )}
      <button
        className={
          showQuote
            ? `${styles.button} ${styles.buttonSecondary}`
            : `${styles.button} ${styles.buttonPrimary}`
        }
        type="button"
        onClick={() => quoteHandler()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
          <path
            fill="#012F34"
            fill-rule="evenodd"
            d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"
          />
        </svg>
      </button>
    </article>
  );
};

export default Profile;
