import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Slides from "../components/Slides";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className={styles["index-cont"]}>
      <Navigation />
      <Slides />

      <Footer />
    </div>
  );
}
