import { motion } from "framer-motion";
import Link from "next/link";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ContentCategoria = ({ children }) => {
  return (
    <div className="col-3">
      <div className="ml-3 pb-2 pt-0">
        <Link href="/menu">
          <a className="btn btn-primary btn-block btn-lg btn-marketing ml-1 pt-4 pb-4">
            Seleccionar otra tienda <i class="fas fa-store"></i>
          </a>
        </Link>
      </div>
      <motion.div
        variants={stagger}
        className="row ml-2 overflow-auto page-overflow"
        style={{ maxHeight: "76.4vh" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ContentCategoria;
