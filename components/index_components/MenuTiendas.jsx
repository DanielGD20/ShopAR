import { motion } from "framer-motion";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const MenuTiendas = (props) => {
  return (
    <div className="bg-light">
      <section className="pb-10 mt-10">
        <div className="container">
          <div className="row">
            <div className="col-12 pb-5 pt-0 mt-0" align="center">
              <motion.h1
                initial={{ y: 40, opacoty: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-900 texto"
              >
                Selecciona la tienda que quieres visitar
              </motion.h1>
            </div>
          </div>
          <motion.div variants={stagger} className="row">
            {props.children}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MenuTiendas;
