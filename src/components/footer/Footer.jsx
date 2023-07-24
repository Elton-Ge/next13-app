import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 Elton. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          width={15}
          height={15}
          src={"/1.png"}
          className={styles.icon}
          alt={"Elton Facebook"}
        />
        <Image
          width={15}
          height={15}
          src={"/2.png"}
          className={styles.icon}
          alt={"Elton Pinterest"}
        />
        <Image
          width={15}
          height={15}
          src={"/3.png"}
          className={styles.icon}
          alt={"Elton Twitter"}
        />
        <Image
          width={15}
          height={15}
          src={"/4.png"}
          className={styles.icon}
          alt={"Elton Youtube"}
        />
      </div>
    </div>
  );
};

export default Footer;
