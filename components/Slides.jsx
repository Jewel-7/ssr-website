import React from "react";
import { Slide } from "react-slideshow-image";
import styles from "../styles/Home.module.css";
import "react-slideshow-image/dist/styles.css";

const properties = {
  duration: 2000,
  transitionDuration: 800,
};

const Slideshow = () => {
  return (
    <div className={styles["slide"]}>
      <Slide {...properties}>
        <div className={styles["each-slide1"]}>
          <img
            className={styles["slide-image1"]}
            src="https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/blt78bd9fc2084185e1/5e31675d7ca70442647a5061/Who-we-Are.png?format=pjpg&width=1210"
            alt=""
          />
        </div>

        <div className={styles["each-slide3"]}>
          <img
            className={styles["slide-image3"]}
            src="https://digitalmarketingsupermarket.com/wp-content/uploads/2020/02/www_contentstack_com_1024_768.png"
            alt=""
          />
        </div>
        <div className={styles["each-slide2"]}>
          <img
            className={styles["slide-image2"]}
            src="https://images.contentstack.io/v3/assets/blt137524604e62b5cb/blt97e1e009fc35ebee/5edf6b23e92db173fb37dd2a/RE-office2@2x.png?auto=webp&quality=100&format=pjpg"
            alt=""
          />
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
