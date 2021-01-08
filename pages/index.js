import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className={styles["index-cont"]}>
      <Layout />
      <h1>home-page</h1>
    </div>
  );
}
