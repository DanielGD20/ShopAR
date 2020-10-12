import Container from "../components/general_components/Container";
import HeaderTienda from "../components/shop_components/HeaderTienda";
import FooterTienda from "../components/shop_components/FooterTienda";
import ContentCategoria from "../components/shop_components/ContentCategoria";
import ContentShop from "../components/shop_components/ContentShop";
import Title from "../components/general_components/Title";
import { motion } from "framer-motion";
import CategoriaItem from "../components/shop_components/CategoriaItem";
import ContentGeneric from "../components/shop_components/ContentGeneric";

const itemsTest = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
];
const contentItem = [
  {
    talla: "XL",
    precio: "$3.50",
    agregadoHace: "Agregado hace 1 mes",
  },
  {
    talla: "XL",
    precio: "$3.50",
    agregadoHace: "Agregado hace 1 mes",
  },
  {
    talla: "XL",
    precio: "$3.50",
    agregadoHace: "Agregado hace 1 mes",
  },
  {
    talla: "XL",
    precio: "$3.50",
    agregadoHace: "Agregado hace 1 mes",
  },
];

const FirstPage = () => {
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
      <HeaderTienda imageUrl="/images/foto3.jpg">
        <Title
          titulo="ShopAR"
          descripcion="¡Selecciona tu tienda favorita y comienza a experimentar la
        realidad aumentada!"
        />
      </HeaderTienda>
      <Container title="ShopAR - Tienda">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <ContentCategoria>
                {itemsTest.map((item, index) => {
                  return <CategoriaItem />;
                })}
              </ContentCategoria>
              <ContentShop>
                <ContentGeneric />
              </ContentShop>
            </div>
          </div>
        </div>
      </Container>
      <FooterTienda href="/" />
    </motion.div>
  );
};

export default FirstPage;
