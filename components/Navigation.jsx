import Link from "next/link";
import styles from "../styles/Home.module.css";

function Navigation() {
  return (
    <nav className={styles["header-section"]}>
      <div className={styles["navigation"]}>
        <ul>
          <li className={styles["nav-link"]}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles["nav-link"]}>
            {" "}
            <Link href="/raw">
              <a>Raw</a>
            </Link>
          </li>
          <li className={styles["nav-link"]}>
            {" "}
            <Link href="/contentStack">
              <a>ContentStack</a>
            </Link>
          </li>
          <li className={styles["nav-link"]}>
            {" "}
            <Link href="/surfBoard">
              <a>SurfBoard</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navigation;
