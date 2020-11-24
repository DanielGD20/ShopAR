import Container from "../components/general_components/Container";
import Link from "next/link";
import { motion } from "framer-motion";

const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInRight = {
  initial: {
    x: -60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const ScreenSaver = () => {
  return (
    <motion.div
      exit="pageExit"
      initial="initial"
      animate="animate"
      variants={{
        pageExit: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
          transition: {
            duration: 0.6,
          },
        },
      }}
    >
      <Container title="Background">
        <div className="bg">
          <div style={{ height: "110.4vh" }}></div>
          <motion.div
            variants={fadeInRight}
            className="centered-3"
            align="center"
          >
            <h1 style={{ color: "white", fontSize: "50px" }}>
              Bienvenido a <br /> ¡ShopAR!
            </h1>
            <br />
            <h1 style={{ color: "white", fontSize: "30px" }}>
              La única tienda virtual con realidad aumentada, visualiza tus
              productos antes de comprarlos
            </h1>
            <br />
            <Link href="/menu">
              <a className="btn btn-primary btn-marketing btn-block btn-lg">
                <h1 style={{ color: "white" }}>
                  ¡Comenzar con la experiencia de realidad aumentada!
                </h1>
              </a>
            </Link>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};

export default ScreenSaver;
