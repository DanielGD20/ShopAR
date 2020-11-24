import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const Accordion = ({ i, expanded, setExpanded, imgQR }) => {
  var isOpen = i === expanded;
  console.log(isOpen);
  isOpen = true;
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
              <h1 style={{ fontSize: "17px", color: "white" }}>
                Utiliza tu cámara para escanear el código y visualizar la
                realidad aumentada.
              </h1>
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
                {/* <div className="col-6 pl-4 ml-0 mt-5 pr-0" align="left">
                  <h1 style={{ fontSize: "25px" }}>
                    Utiliza tu cámara para escanear el código y visualizar la
                    realidad aumentada.
                  </h1>
                </div> */}
                <div className="col-12 mt-2 ml-2" align="center">
                  <img
                    src={imgQR}
                    alt="Code"
                    className="img-responsive"
                    style={{
                      height: "250px",
                      paddingBottom: "20px",
                      paddingTop: "20px",
                      paddingRight: "30px",
                    }}
                  />
                  <h1
                    style={{
                      fontSize: "25px",
                      marginLeft: "-20px",
                      marginBottom: "25px",
                    }}
                  >
                    ¡Realidad Aumentada!
                  </h1>
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
