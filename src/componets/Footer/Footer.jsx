import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-black p-2">
      <footer className={styles.footer}>
        <div className={styles.containerFooter}>
          <div className={styles.icons}></div>
          <ul className={styles.details}>
            <li>
              <Link to="/journey" className="hover:underline">
                Our Journey
              </Link>
            </li>
            <li>
              <Link to="/letters" className="hover:underline">
                Love Letters
              </Link>
            </li>
            <li>
              <Link to="/future" className="hover:underline">
                Our Future
              </Link>
            </li>
            <li>
              <Link to="/finale" className="hover:underline">
                The Ending
              </Link>
            </li>
          </ul>
          <div className={styles.security}>
            <span className="text-stone-500">Made with ♥ — Our One Year Story</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
