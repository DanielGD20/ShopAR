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

const BiggerCardComponent = (props) => {
  return (
    <motion.div variants={fadeInUp}>
      <a
        className="card post-preview post-preview-featured lift mb-5"
        href="#!"
      >
        <div className="row no-gutters">
          <div className="col-lg-5">
            <div
              className="post-preview-featured-img"
              style={{
                backgroundImage: `url(${props.imageUrl})`,
              }}
            />
          </div>
          <div className="col-lg-7">
            <div className="card-body">
              <div className="py-5">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
              </div>
              <hr />
              <div className="post-preview-meta">
                <img
                  className="post-preview-meta-img"
                  src="/images/ar.png"
                />
                <div className="post-preview-meta-details">
                  <div className="post-preview-meta-details-name">
                    <h3>¡Realidad Aumentada!</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default BiggerCardComponent;
