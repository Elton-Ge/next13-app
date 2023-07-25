import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error("Failed to fetch data");
    return notFound();
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((post) => (
        <Link
          key={post._id}
          href={`/blog/${post._id}`}
          className={styles.container}
        >
          <div className={styles.imgContainer}>
            <Image
              src={post.img}
              alt={""}
              width={400}
              height={250}
              className={styles.img}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
