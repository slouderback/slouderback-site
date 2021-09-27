import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";

export const Home: React.FC = (props: any) => {
  return (
    <div>
      <div className={styles.header}>Hey</div>
      <div className={styles.name}>Im Sam Louderback</div>
      <div className={styles.subText}>
        a senior at UC Davis studying computer science
      </div>
      <div className={styles.welcomeMessage}>welcome to my page</div>
    </div>
  );
};

export default Home;
