import { motion } from "framer-motion";

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
        <h2>Content Categoria</h2>
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
