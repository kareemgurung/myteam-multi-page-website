import { useNavigate } from "react-router-dom";
import styles from "./contactfooter.module.scss";
import Button from "../Button/Button";

const ContactFooter = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        <h2>Ready to get started?</h2>
        <Button
          onClick={() => navigate("./contact")}
          name="contact us"
          color="dark"
        />
      </div>
    </div>
  );
};

export default ContactFooter;
