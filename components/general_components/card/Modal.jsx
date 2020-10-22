import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ itemToggled, children, setItemToggled }) => {
  return (
    <AnimatePresence>
      {itemToggled && (
        <motion.div
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            initial={{ y: 50 }}
            exit={{ y: 30 }}
            animate={{ y: 0 }}
            style={{
              position: "fixed",
              top: "40px",
              left: "50%%",
              transform: "translate3d(-50%,0,0)",
            }}
          >
            <button
              className="btn btn-danger"
              onClick={() => {
                console.log("clickeado");
                setItemToggled(false);
              }}
            >
              Close
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
