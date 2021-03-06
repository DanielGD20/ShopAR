//Import de conponentes de react
import Container from "../components/general_components/Container";
import Title from "../components/general_components/header/Title";
import Header from "../components/index_components/topbot/Header";
import Footer from "../components/index_components/topbot/Footer";
import MenuTiendas from "../components/index_components/tiendas/MenuTiendas";
import ItemTienda from "../components/index_components/tiendas/ItemTienda";

//Import de librerias externas
import { motion } from "framer-motion";

const Index = ({ shops }) => {
  //Funcion Principal
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
        <Title titulo="ShopAR" inicio={true} />
      </Header>
      <Container title="ShopAR">
        <MenuTiendas>
          {shops.map((tienda) => {
            return (
              <ItemTienda
                title={tienda.title}
                alt={tienda.alt}
                image={tienda.image}
                href={tienda.href}
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
  const response = await fetch("/api/shops");
  const shops = await response.json();
  console.log(shops);
  return { shops };
};

export default Index;
