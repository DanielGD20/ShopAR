import { motion } from "framer-motion";

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

const CardComponent = (props) => {
  return (
    <motion.div variants={fadeInUp} className="col-md-6 col-xl-4 mb-5">
      <a className="card post-preview lift h-100" href="#!">
        <img
          className="card-img-top items"
          src={props.imageUrl}
          alt={props.imageAlt}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
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
      </a>
    </motion.div>
  );
};

export default CardComponent;
