import { motion } from "framer-motion";

const Title = ({ titulo, descripcion }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="col-lg-8"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
      <h1
        className="page-header-title text-white title"
        style={{ fontSize: "5.5rem", marginTop: "2.1rem" }}
      >
        {titulo}
      </h1>
      {/* <h2 className="text-white subtitle">{descripcion}</h2> */}
    </motion.div>
  );
};

export default Title;
