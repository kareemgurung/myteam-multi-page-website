import Profile from "../../components/Profile/Profile";
import styles from "./about.module.scss";
import { profiles } from "../../data/data";

const About = () => {
  return (
    <main>
      <section className={styles.container1}>
        <div className={styles.hero1}>
          <h1>About</h1>
          <p>
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
        </div>
      </section>
      <section className={styles.container2}>
        <div className={styles.hero2}>
          <h2>Meet the directors</h2>
          <div className={styles.profileContainer}>
            {profiles.map((profile) => {
              return (
                <Profile
                  key={profile.id}
                  name={profile.name}
                  quote={profile.quote}
                  position={profile.position}
                  image={profile.image}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className={styles.container3}>
        <div className={styles.hero3}>
          <h2>Some of our clients</h2>
          <ul>
            <li>
              <img
                src="../../../images/logo-the-verge.png"
                alt="the verge logo"
              />
            </li>
            <li>
              <img
                src="../../../images/logo-jakarta-post.png"
                alt="jakarta post logo"
              />
            </li>
            <li>
              <img
                src="../../../images/logo-the-guardian.png"
                alt="the guardian logo"
              />
            </li>
            <li>
              <img
                src="../../../images/logo-tech-radar.png"
                alt="tech radar logo"
              />
            </li>
            <li>
              <img
                src="../../../images/logo-gadgets-now.png"
                alt="gadgets now logo"
              />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default About;
