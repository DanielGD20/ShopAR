import { motion } from "framer-motion";

const Title = ({ titulo, inicio }) => {
  const estilosInicio = inicio
    ? {
        img: {
          marginTop: "-3.4rem",
        },
        h1: {
          fontSize: "5.5rem",
          marginTop: "-3rem",
        },
      }
    : {
        img: {
          display: "none",
        },
        h1: {
          fontSize: "5.5rem",
          marginTop: "2.3rem",
        },
      };
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
      <img
        src="/images/shopicon.png"
        alt="Logo"
        width="150"
        height="150"
        style={estilosInicio.img}
      />
      <h1
        className="page-header-title text-white title"
        style={estilosInicio.h1}
      >
        {titulo}
      </h1>

      {/* <h2 className="text-white subtitle">{descripcion}</h2> */}
    </motion.div>
  );
};

export default Title;
