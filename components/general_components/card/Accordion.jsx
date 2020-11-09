import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ i, expanded, setExpanded }) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.div
        className="card-footer"
        initial={false}
        animate={{ backgroundColor: isOpen ? "#1da1f2" : "#0061f2" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <div className="post-preview-meta">
          <img className="post-preview-meta-img" src="/svgs/ar.svg" />
          <div className="post-preview-meta-details">
            <div
              className="post-preview-meta-details-name"
              style={{ color: "white", fontSize: "16px" }}
            >
              ¡Realidad Aumentada!
            </div>
          </div>
        </div>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="container">
              <div className="row">
                <div className="col-8 mt-5" align="left">
                  <h1 style={{ fontSize: "34px" }}>
                    Accede a la realidad aumentada aqui escaneando el siguiente
                    código.
                  </h1>
                </div>
                <div className="col-4 mt-2 ml-0" align="center">
                  <img
                    src="/images/codehat.png"
                    alt="Code"
                    className="img-responsive"
                    style={{ height: "270px", paddingBottom:"20px", paddingTop:"20px", paddingRight:"30px" }}
                  />
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion;
