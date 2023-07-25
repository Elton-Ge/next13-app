"use client";
import React, { useContext } from "react";
import styles from "./darkmode.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const Darkmode = () => {
  const { mode, toggleMode } = useContext(ThemeContext);
  const style = mode === "light" ? { left: "2px" } : { right: "2px" };
  return (
    <div className={styles.container} onClick={toggleMode}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>☀️</div>
      <div className={styles.ball} style={style}></div>
    </div>
  );
};

export default Darkmode;
