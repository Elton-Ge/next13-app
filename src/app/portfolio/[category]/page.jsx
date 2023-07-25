import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import { notFound } from "next/navigation";
import { items } from "./data";

const getData = (category) => {
  const data = items[category];
  if (data) return data;
  return notFound();
};
const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.desc}>{item.desc}</p>
            <Button text={"See More"} url={"#"} />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              alt={""}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
