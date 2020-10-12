import Link from "next/link";
import { motion } from "framer-motion";

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

const Tienda = (props) => {
  return (
    <motion.div variants={fadeInUp} className="col-md-6 col-xl-4 mb-5">
      <Link href={props.href}>
        <a className="card card-portfolio h-100">
          <img
            className="card-img-top index-menu"
            src={props.image}
            alt={props.alt}
          />
          <div className="card-body">
            <div className="card-title">{props.title}</div>
          </div>
        </a>
      </Link>
    </motion.div>
  );
};

export default Tienda;
