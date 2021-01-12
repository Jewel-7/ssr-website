import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Slides from "../components/Slides";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className={styles["index-cont"]}>
      {/* <Layout /> */}
      <Navigation />
      <Slides />
      {/* <h1 className={styles["des-head"]}>About Raw Enginering</h1>
      <div className={styles["description"]}></div>
      <h1 className={styles["des-head"]}>About Surfboard</h1>
      <div className={styles["description"]}></div>
      <h1 className={styles["des-head"]}>About Us</h1>
      <div className={styles["description"]}></div>
      <h1></h1> */}
      <Footer />
    </div>
  );
}
