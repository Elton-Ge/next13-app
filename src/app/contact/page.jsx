import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
export const metadata = {
  title: "Contact Page",
  description: "this is the description of the contact page",
};
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{`Let's Keep in touch`}</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={"/contact.png"}
            fill={true}
            alt={"contact"}
            className={styles.img}
          />
        </div>

        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Email" className={styles.input} />
          <textarea
            placeholder="Message"
            className={styles.textarea}
            cols={30}
            rows={10}
          ></textarea>
          <Button url={"#"} text={"Send"} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
