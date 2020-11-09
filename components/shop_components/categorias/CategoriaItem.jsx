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

const CategoriaItem = ({
  color,
  categoryUrl,
  categoryAlt,
  categoryName,
  changeDataShop,
  getCategoryName,
}) => {
  const [isSelected, setSelected] = useState(false);

  //Funcion para cambiar el color del boton
  var style = isSelected
    ? {
        transform: "scale(0.9)",
        webkitTransform: "scale(0.85)",
        backgroundColor: "#1da1f2",
        cursor: "pointer",
      }
    : {
        cursor: "pointer",
        backgroundColor: "#333333",
      };

  //Funcion para cambiar de estado
  const cambiarEstado = () => {
    setSelected((prevValue) => !prevValue);
    changeDataShop(isSelected);
    getCategoryName(categoryName.toLowerCase());
  };

  return (
    <motion.div
      variants={fadeInRight}
      className="col-12 mt-0 mb-3 pr-3 pl-2 pt-2"
    >
      <a className="card lift pb-5 pt-2" style={style} onClick={cambiarEstado}>
        <img
          className="card-img-top categories"
          src={categoryUrl}
          alt={categoryAlt}
        />
        <div className="centered">
          <h3 style={{ color: "white" }}>{categoryName}</h3>
        </div>
      </a>
    </motion.div>
  );
};

export default CategoriaItem;
