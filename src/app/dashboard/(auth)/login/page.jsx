"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const session = useSession();
  const router = useRouter();
  if (session.status === "loading") {
    return <div>Loading...</div>;
  }
  if (session.status === "authenticated") {
    return router.push("/dashboard");
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn("credentials", { email: data.email, password: data.password });
    // console.log(data);
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
};

export default Login;
