import { motion } from "framer-motion";
import Banner from "../header/Banner";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const CardSlider = () => {
  return (
    <motion.div
      variants={fadeInUp}
      className="col-md-12 col-xl-12 col-xxl-12 mb-5"
    >
      <div className="card header">
        {/* <Banner /> */}
      </div>
    </motion.div>
  );
};

export default CardSlider;
