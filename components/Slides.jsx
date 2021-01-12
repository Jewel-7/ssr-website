import React from "react";

import { Slide } from "react-slideshow-image";
import styles from "../styles/Home.module.css";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/blt78bd9fc2084185e1/5e31675d7ca70442647a5061/Who-we-Are.png?format=pjpg&width=1210",
  "https://media-exp1.licdn.com/dms/image/C4D1BAQGORgdnW9tgiQ/company-background_10000/0/1591965978994?e=2159024400&v=beta&t=muB5jWIpPh0BlE8Qn64yp7s-jcGSD8-W0VAMs5VGzWE",
  "https://digitalmarketingsupermarket.com/wp-content/uploads/2020/02/www_contentstack_com_1024_768.png",
];
const properties = {
  duration: 2000,
  transitionDuration: 800,
  //   infinite: true,
  //   indicators: true,
  //   arrows: true,
};

const Slideshow = () => {
  return (
    <div className={styles["slide"]}>
      <Slide {...properties}>
        <div className={styles["each-slide1"]}>
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className={styles["each-slide2"]}>
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </div>
        <div className={styles["each-slide3"]}>
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
