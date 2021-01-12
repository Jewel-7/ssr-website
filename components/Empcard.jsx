import styles from "../styles/Home.module.css";

function EmpCard(props) {
  let { firstName, lastName, company, imageUrl } = props;
  return (
    <div className={styles["emp-back"]}>
      <div className={styles["card"]}>
        <h1 className={styles["name"]}>
          {firstName} {lastName}
        </h1>
        <img src={imageUrl} alt="" className={styles["image"]} />
        <p className={styles["company"]}>{company}</p>
      </div>
    </div>
  );
}

export default EmpCard;
