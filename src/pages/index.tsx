import axios from "axios";
import { useState } from "react";

import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const [data, setData] = useState();

  const send = async () => {
    const res = await axios.get("/api/bot") 
      .then(res => setData(res.data))
      .catch(err => setData(err.message))
  } 

  return <Layout title="Home">
    <main className={styles.main}>
      <button className={styles.btn} onClick={send}>Send Request</button>
      <p className={styles.data}>{JSON.stringify(data)}</p>
    </main>
  </Layout>
}