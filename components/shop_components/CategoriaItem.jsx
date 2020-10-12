import { motion } from "framer-motion";

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

const CategoriaItem = () => {
  return (
    <motion.div variants={fadeInRight} className="mt-0 mb-3 pr-3 pl-2 pt-2">
      <a className="card lift" href="#!">
        <img
          className="card-img-top categories"
          src="https://source.unsplash.com/random"
          alt="..."
        />
        <div className="centered">
          <h3 style={{ color: "white" }}>Centrado</h3>
        </div>
      </a>
    </motion.div>
  );
};

export default CategoriaItem;
