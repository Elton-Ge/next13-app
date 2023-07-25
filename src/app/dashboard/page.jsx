"use client";
import React from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";

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
  const session = useSession();
  console.log(session);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher,
  );

  // console.log(data);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <div>{JSON.stringify(data)}</div>;
};

export default Dashboard;
