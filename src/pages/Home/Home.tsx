import styles from "./home.module.scss";

const Home = () => {
  return (
    <main>
      <section className={styles.container1}>
      <div className={styles.hero1}>
        <h1>
          Find the best <span>talent</span>
        </h1>
        <p>
          Finding the right people and building high performing teams can be
          hard. Most companies aren&#39;t tapping into the abundance of global
          talent. We&#39;re about to change that.
        </p>
      </div></section>
      <section className={styles.container2}>
      <div className={styles.hero2}>
        <h2>Build & manage distributed teams like no one else.</h2>
        <div className={styles.articles}>
          <article>
            <img src="../../../images/icon-person.svg" alt="person icon" />
            <div>
              <h3>Experienced Individuals</h3>
              <p>
                Our network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </div>
          </article>
          <article>
            <img src="../../../images/icon-cog.svg" alt="cog icon" />
            <div>
              <h3>Easy to Implement</h3>
              <p>
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </div>
          </article>
          <article>
            <img src="../../../images/icon-chart.svg" alt="chart icon" />
            <div>
              <h3>Enhanced Productivity</h3>
              <p>
                Our customized platform with in-built analytics helps you manage
                your distributed teams.
              </p>
            </div>
          </article>
        </div>
      </div></section>
      <section className={styles.container3}>
      <div className={styles.hero3}>
        <h2>
          Delivering real results for top companies. Some of our{" "}
          <span>success stories.</span>
        </h2>
        <div className={styles.comments}>
          <article>
            <p className={styles.comment}>
              “The team perfectly fit the specialized skill set required. They
              focused on the most essential features helping us launch the
              platform eight months faster than planned.”
            </p>
            <div className={styles.info}>
              <h3>Kady Baker</h3>
              <p>Product Manager at Bookmark</p>
            </div>
            <img src="../../../images/avatar-kady.jpg" alt="avatar" />
          </article>
          <article>
            <p className={styles.comment}>
              “We needed to automate our entire onboarding process. The team
              came in and built out the whole journey. Since going live, user
              retention has gone through the roof!”
            </p>
            <div className={styles.info}>
              <h3>Aiysha Reese</h3>
              <p>Founder of Manage</p>
            </div>
            <img src="../../../images/avatar-aiysha.jpg" alt="avatar" />
          </article>
          <article>
            <p className={styles.comment}>
              “Amazing. Our team helped us build an app that delivered a new
              experience for hiring a physio. The launch was an instant success
              with 100k downloads in the first month.”
            </p>
            <div className={styles.info}>
              <h3>Arthur Clarke</h3>
              <p>Co-founder of MyPhysio</p>
            </div>
            <img src="./../../images/avatar-arthur.jpg" alt="avatar" />
          </article>
        </div>
      </div></section>
    </main>
  );
};

export default Home;
