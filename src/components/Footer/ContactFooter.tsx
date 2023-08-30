import { useNavigate } from "react-router-dom";
import styles from "./contactfooter.module.scss";

const ContactFooter = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h2>Ready to get started?</h2>
      <button
        type="button"
        className={styles.contactButton}
        onClick={() => navigate("./contact")}
      >
        contact us
      </button>
    </div>
  );
};

export default ContactFooter;
