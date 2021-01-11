import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Slides from "../components/Slides";

export default function Home() {
  return (
    <div className={styles["index-cont"]}>
      <Layout />
      <Slides />
      <h1>home-page</h1>
    </div>
  );
}
