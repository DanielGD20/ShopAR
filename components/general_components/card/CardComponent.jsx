import { motion } from "framer-motion";
import Modal from "./Modal";
import { useEffect, useState } from "react";

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

const CardComponent = ({ imageUrl, imageAlt, title, description }) => {
  const [itemToggled, setItemToggled] = useState(false);

  return (
    <motion.div variants={fadeInUp} className="col-md-6 col-xl-4 mb-5">
      <a className="card post-preview lift h-100" href="#!">
        <img className="card-img-top items" src={imageUrl} alt={imageAlt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <div className="post-preview-meta">
            <img className="post-preview-meta-img" src="/images/ar.png" />
            <div className="post-preview-meta-details">
              <div className="post-preview-meta-details-name">
                ¡Realidad Aumentada!
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => setItemToggled(true)}
        >
          Activame
        </button>
        <Modal
          itemToggled={itemToggled}
          setItemToggled={setItemToggled}
        ></Modal>
      </a>
    </motion.div>
  );
};

export default CardComponent;
