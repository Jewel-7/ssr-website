// import styles from "./EmployeCard.module.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";

// import { SocialMediaIconsReact } from "social-media-icons-react";

function CompanyPage(props) {
  let { user } = props;
  return (
    <div className={styles["card-container"]}>
      <img className={styles["banner-image"]} src={user.imageUrl} alt="blog" />
      <h1 className={styles["centered"]}>{user.name}</h1>
      <h1 className={styles["des-head"]}>About Us</h1>
      <div className={styles["description"]}>
        <p>{user.description}</p>
      </div>
      <h1 className={styles["des-head"]}>What we Do</h1>
      <p className={styles["description1"]}>{user.type}</p>
    </div>
  );
}

export default CompanyPage;
