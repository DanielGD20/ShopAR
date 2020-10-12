import { motion } from "framer-motion";
import Link from "next/link";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ContentCategoria = (props) => {
  return (
    <div className="col-3">
      <div className="ml-3 pb-4">
        <Link href="/">
          <a className="btn btn-primary btn-block btn-lg btn-marketing ml-1">
            Volver al Inicio
          </a>
        </Link>
      </div>
      <motion.div
        variants={stagger}
        className="row ml-2 overflow-auto page-overflow"
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export default ContentCategoria;
