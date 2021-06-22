import React from "react";
import image from "./img/6663.jpg";
import logo from "./img/logo.png";
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <header>
        <img src={logo} alt="" />
      </header>
      <div className={styles.container}>
        <div className={styles.welcomeSection}>
          <h1 style={{lineHeight:'50px'}}>Welcome to A University</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            officiis nihil quibusdam cum? Error cum et omnis, ex non excepturi.
          </p>
          <div className={styles.buttons}>
            <a id={styles.login} href="/login">Login</a>
            <a id={styles.signUp} href="/signup">Sign up</a>
          </div>
        </div>
        <div className='landingPageSection'>
          <img src={image} alt="landing page image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
