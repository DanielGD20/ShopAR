import { motion } from "framer-motion";
import { useState } from "react";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInRight = {
  initial: {
    x: -60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const BiggerCardComponent = ({
  imageUrl,
  imageAlt,
  title,
  description,
  changeDataShopBigger,
}) => {
  const [biggerClicked, setBiggerClicked] = useState(false);

  const changeData = () => {
    setBiggerClicked((prevValue) => !prevValue);
    changeDataShopBigger(biggerClicked);
  };

  return (
    <motion.div
      variants={fadeInRight}
      className="col-md-12 col-xl-12 col-xxl-12 mb-5"
    >
      <a className="card post-preview lift h-100" href="#!">
        <img
          className="card-img-top items"
          src={imageUrl}
          alt={imageAlt}
          style={{ height: "400px" }}
          onClick={changeData}
        />
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <p className="card-text">{description}</p>
        </div>
      </a>
    </motion.div>
  );
};

export default BiggerCardComponent;
