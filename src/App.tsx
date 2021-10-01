import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";

import logo from "../src/images/logo.png";

import styles from "./App.module.css";

export const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Router>
        <nav>
          <ul className={styles.nav}>
            <li className={styles.logo}>
              <Link to="/" className={styles.links}>
                {/* <img src={logo} className={styles.logoImage} /> */}
                <div className={styles.linkText}>Logo here</div>
              </Link>
            </li>
            <li>
              <div>
                <Link to="/" className={styles.links}>
                  <div className={styles.linkText}>Home</div>
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link to="/projects" className={styles.links}>
                  <div className={styles.linkText}>Projects</div>
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link to="/about" className={styles.links}>
                  <div className={styles.linkText}>About me</div>
                </Link>
              </div>
            </li>
          </ul>
        </nav>
        <div className={styles.bodyContainer}>
          <Switch>
            <Redirect from="index.html" to="/" />
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about" component={About} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
