"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    router.push("/dashboard/login?success=true");
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type={"text"}
          placeholder={"name"}
          name={"name"}
          value={data.name}
          onChange={handleInputChange}
          className={styles.input}
          required
        />
        <input
          type={"email"}
          placeholder={"email"}
          name={"email"}
          value={data.email}
          onChange={handleInputChange}
          className={styles.input}
          required
        />
        <input
          type={"password"}
          placeholder={"password"}
          name={"password"}
          value={data.password}
          onChange={handleInputChange}
          className={styles.input}
          required
        />
        <button className={styles.button} type={"submit"}>
          Register
        </button>
      </form>
      <Link href={"/dashboard/login"}>Login With an existing account</Link>
    </div>
  );
};

export default Register;
