// import fetch from "isomorphic-fetch";
import Container from "../components/general_components/Container";
import Title from "../components/general_components/Title";
import Header from "../components/index_components/Header";
import MenuTiendas from "../components/index_components/MenuTiendas";
import ItemTienda from "../components/index_components/ItemTienda";
import Footer from "../components/index_components/Footer";
import { motion } from "framer-motion";

const Index = (props) => {
  console.log(props.shops);
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
      <Header>
        <Title
          titulo="ShopAR"
          descripcion="¡Selecciona tu tienda favorita y comienza a experimentar la
        realidad aumentada!"
        />
      </Header>
      <Container title="ShopAR">
        <MenuTiendas>
          {props.shops.map((tienda) => {
            return (
              <ItemTienda
                title={tienda.title}
                alt={tienda.alt}
                image={tienda.image}
                href={tienda.href}
                name={tienda.title}
              />
            );
          })}
        </MenuTiendas>
      </Container>
      <Footer />
    </motion.div>
  );
};

Index.getInitialProps = async (ctx) => {
  const response = await fetch("http://localhost:3000/api/shops");
  const shops = await response.json();
  console.log(shops);
  return { shops };
};

export default Index;
