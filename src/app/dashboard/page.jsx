"use client";
import React, { useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       next: { revalidate: 10 },
  //     });
  //     // The return value is *not* serialized
  //     // You can return Date, Map, Set, etc.
  //
  //     // Recommendation: handle errors
  //     if (!res.ok) {
  //       // This will activate the closest `error.js` Error Boundary
  //       // throw new Error("Failed to fetch data");
  //       setError("failed to fetch data");
  //       setLoading(false);
  //     }
  //     const data = await res.json();
  //     setData(data);
  //     setLoading(false);
  //
  //     // return res.json();
  //   };
  //   getData();
  // }, []);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    img: "",
    content: "",
  });

  const session = useSession();
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher,
  );

  if (session.status === "loading" || isLoading) {
    return <div>Loading...</div>;
  }
  if (session.status === "unauthenticated") {
    return router.push("/dashboard/login");
  }

  // console.log(data);
  if (error) return <div>failed to load</div>;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          username: session?.data?.user.name,
        }),
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      setFormData({
        title: "",
        desc: "",
        img: "",
        content: "",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {data?.map((post) => (
          <div className={styles.post} key={post._id}>
            <div className={styles.imgContainer}>
              <Image src={post.img} alt={""} fill={true} />
            </div>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <span
              className={styles.delete}
              onClick={() => handleDelete(post._id)}
            >
              X
            </span>
          </div>
        ))}
      </div>
      <form className={styles.new} onSubmit={handleSubmit}>
        <h2>Add New Post</h2>
        <input
          type={"text"}
          placeholder={"title"}
          name={"title"}
          value={formData.title}
          onChange={handleInputChange}
          className={styles.input}
        />
        <input
          type={"text"}
          placeholder={"desc"}
          name={"desc"}
          value={formData.desc}
          onChange={handleInputChange}
          className={styles.input}
        />
        <input
          type={"text"}
          placeholder={"image"}
          name={"img"}
          value={formData.img}
          onChange={handleInputChange}
          className={styles.input}
        />
        <textarea
          placeholder={"content"}
          name={"content"}
          value={formData.content}
          onChange={handleInputChange}
          className={styles.textarea}
          cols={30}
          rows={10}
        />
        <button type={"submit"} className={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
