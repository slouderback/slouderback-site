import React from "react";

import styles from "./Home.module.css";

export const Home: React.FC = (props: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>Sam Louderback</div>
      <div className={styles.subText}>
        Senior at UC Davis studying computer science
      </div>
      <div className={styles.welcomeMessage}>Welcome to my page</div>
    </div>
  );
};

export default Home;
