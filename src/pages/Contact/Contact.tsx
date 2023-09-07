import styles from "./contact.module.scss";

import Form from "../../components/Form/Form";

const Contact = () => {
  return (
    <main>
      <div className={styles.container}>
        <section className={styles.info}>
          <div>
            <h1>Contact</h1>
            <h2>Ask us about</h2>
          </div>
          <ul>
            <li>
              <img src="../../../images/icon-person.svg" alt="person icon" />
              <p>The quality of our talent network</p>
            </li>
            <li>
              <img src="../../../images/icon-cog.svg" alt="cog icon" />
              <p>Usage & implementation of our software</p>
            </li>
            <li>
              <img src="../../../images/icon-chart.svg" alt="chart icon" />
              <p>How we help drive innovation</p>
            </li>
          </ul>
        </section>
        <Form />
      </div>
    </main>
  );
};

export default Contact;
