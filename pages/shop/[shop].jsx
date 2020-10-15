import Container from "../../components/general_components/Container";
import HeaderTienda from "../../components/shop_components/HeaderTienda";
import FooterTienda from "../../components/shop_components/FooterTienda";
import ContentCategoria from "../../components/shop_components/ContentCategoria";
import ContentShop from "../../components/shop_components/ContentShop";
import Title from "../../components/general_components/Title";
import CategoriaItem from "../../components/shop_components/CategoriaItem";
import CardComponent from "../../components/general_components/CardComponent";
import BiggerCardComponent from "../../components/general_components/BiggerCardComponent";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const fakeData = [1, 2, 3, 4];

const ShopPage = (props) => {
  const [categoryClicked, setCategoryClicked] = useState(false);
  const router = useRouter();
  const { shop } = router.query;
  let category = props.name + " Comunica";

  const renderDataCategory = (newState, nameCategory) => {
    console.log(nameCategory);
    category = nameCategory;
    setCategoryClicked(newState);
  };

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
          titulo={shop}
          descripcion="¡Selecciona la categoría de interés y deisfruta de la realidad aumentada!"
        />
      </HeaderTienda>
      <Container title="ShopAR - Tienda">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <ContentCategoria>
                {props.categorias.map((categoria) => {
                  return (
                    <CategoriaItem
                      categoryUrl={categoria.url}
                      categoryName={categoria.name}
                      categoryAlt={categoria.name}
                      color={categoria.color}
                      changeDataShop={renderDataCategory}
                    />
                  );
                })}
              </ContentCategoria>

              {categoryClicked ? (
                <ContentShop name={category}>
                  {fakeData.map((item) => {
                    return (
                      <CardComponent
                        imageUrl="https://source.unsplash.com/random"
                        imageAlt="Al"
                        title="Element"
                        description="Element 1 description"
                      />
                    );
                  })}
                </ContentShop>
              ) : (
                <ContentShop name={category}>
                  <BiggerCardComponent
                    imageUrl="https://source.unsplash.com/vZJdYl5JVXY/660x360"
                    title="Bigger component title"
                    description="bigger component description"
                  />
                </ContentShop>
              )}
            </div>
          </div>
        </div>
      </Container>
      <FooterTienda href="/" />
    </motion.div>
  );
};

ShopPage.getInitialProps = async (ctx) => {
  const response = await fetch("http://localhost:3000/api/categorias");
  const categorias = await response.json();
  return { categorias };
};

export default ShopPage;
