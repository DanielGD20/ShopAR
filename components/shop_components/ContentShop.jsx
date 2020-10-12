import SearchBar from "../general_components/SearchBar";
import { motion } from "framer-motion";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ContentShop = (props) => {
  return (
    <div className="col-9">
      <div className="row">
        <div className="col-4 pt-2">
          <h2>Content Shop</h2>
        </div>
        <SearchBar />
      </div>
      <motion.div
        variants={stagger}
        className="row mr-2 overflow-auto page-overflow"
      >
        <section className="bg-light py-3">
          <div className="container">{props.children}</div>
        </section>
      </motion.div>
      <div className="generic"></div>
    </div>
  );
};

export default ContentShop;
