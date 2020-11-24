import { motion } from "framer-motion";
import Modal from "react-modal";
import { useState } from "react";
import ItemModal from "../../general_components/card/ItemModal";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  content: {
    position: "absolute",
    top: "14%",
    left: "27%",
    right: "40px",
    bottom: "",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "15px",
    outline: "none",
    padding: "20px",
    boxShadow: "0 0 20px gray",
  },
};
Modal.setAppElement("#__next");

const CardComponent = ({
  imageUrl,
  imageAlt,
  title,
  description,
  isNuevo,
  imgQR,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  console.log(imgQR);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <motion.div
      variants={fadeInUp}
      className="col-md-6 col-xl-4 mb-5"
      style={{ cursor: "pointer" }}
    >
      <a className="card post-preview lift h-100" href="#!" onClick={openModal}>
        <img
          className="card-img-top items"
          src={imageUrl}
          alt={imageAlt}
          style={isNuevo ? { height: "400px" } : { height: "200px" }}
        />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <div className="post-preview-meta">
            <div className="post-preview-meta-img">
              <i class="fas fa-mouse-pointer"></i>
            </div>
            <div className="post-preview-meta-details">
              <div className="post-preview-meta-details-name">
                Conóce más de este producto
              </div>
            </div>
          </div>
        </div>
      </a>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={() => closeModal()}
        id="modal"
      >
        <div align="right">
          <button
            class="btn btn-danger"
            style={{ marginBottom: "-20px", marginTop: "-20px" }}
            onClick={closeModal}
          >
            X
          </button>
        </div>

        <ItemModal
          closeModal={closeModal}
          imgModal={imageUrl}
          productName={title}
          description={description}
          imgQR={imgQR}
          price="30.00"
        />
      </Modal>
    </motion.div>
  );
};

export default CardComponent;
