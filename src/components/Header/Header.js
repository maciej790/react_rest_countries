import React from "react";
import styles from "../Header/Header.module.scss";
import { BsMoon } from "react-icons/bs";

function Header() {
  return (
    <header className={styles.header}>
      <h3>Where in the World?</h3>
      <button className={styles.header__themeSwitcher}>
        <BsMoon />
        Dark mode
      </button>
    </header>
  );
}

export default Header;
