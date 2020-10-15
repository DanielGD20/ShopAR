import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

const CategoriaItem = (props) => {
  const [isSelected, setSelected] = useState(true);
  const categoryName = props.categoryName;

  const cambiarEstado = () => {
    setSelected((prevValue) => !prevValue);
    props.changeDataShop(isSelected, categoryName);
  };

  useEffect(() => {
    if (isSelected) {
    }
  });

  return (
    <motion.div
      variants={fadeInRight}
      className="col-12 mt-0 mb-3 pr-3 pl-2 pt-2"
    >
      <a
        className="card lift pb-5 pt-2"
        style={{
          backgroundColor: isSelected ? props.color : "#2752bd",
          cursor: "pointer",
        }}
        onClick={cambiarEstado}
      >
        <img
          className="card-img-top categories"
          src={props.categoryUrl}
          alt={props.categoryAlt}
        />
        <div className="centered">
          <h3 style={{ color: "white" }}>{categoryName}</h3>
        </div>
      </a>
    </motion.div>
  );
};

export default CategoriaItem;
