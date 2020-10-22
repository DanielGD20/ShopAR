//Imports de componentes
import Container from "../../components/general_components/Container";
import HeaderTienda from "../../components/shop_components/topbot/HeaderTienda";
import FooterTienda from "../../components/shop_components/topbot/FooterTienda";
import ContentCategoria from "../../components/shop_components/categorias/ContentCategoria";
import ContentShop from "../../components/shop_components/ContentShop";
import Title from "../../components/general_components/header/Title";
import CategoriaItem from "../../components/shop_components/categorias/CategoriaItem";
import CardComponent from "../../components/general_components/card/CardComponent";
import BiggerCardComponent from "../../components/general_components/card/BiggerCardComponent";

//Imports para librerias de react y manejo de hooks
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

//Fetcher para tomar los datos del api
const fetcher = (url) => fetch(url).then((res) => res.json());

const ShopPage = () => {
  //Controladores de estado
  const [categoryClicked, setCategoryClicked] = useState(false);
  const [nameCategory, setNameCategory] = useState("");
  const [dataShopAsync, setDataShopAsync] = useState([]);

  //Multiples fetch por componentes
  let categorias = [];
  const { data } = useSWR("/api/categorias", fetcher);
  data == undefined ? (categorias = []) : (categorias = data);

  //Uso de router para obtener querys y categorias
  const router = useRouter();
  const { shop } = router.query;
  const generalCategory = shop + " Comunica";

  //Funcion para renderizar los datos de un componente hijo clickeado
  const renderDataCategory = (newState) => {
    setCategoryClicked(newState);
  };
  const getCategoryName = (nameCategory) => {
    setNameCategory(nameCategory.toUpperCase());
  };
  const getItemShop = (items) => {
    items == undefined ? setDataShopAsync([1]) : setDataShopAsync(items);
  };

  //Use efect para cargar en true la pestaña de comunicacion apenas
  //se inicalice el componente
  useEffect(() => {
    setCategoryClicked(true);
  }, []);

  //Funcion principal
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
                {categorias.map((categoria) => {
                  return (
                    <CategoriaItem
                      categoryUrl={categoria.url}
                      categoryName={categoria.name}
                      categoryAlt={categoria.name}
                      color={categoria.color}
                      changeDataShop={renderDataCategory}
                      getCategoryName={getCategoryName}
                    />
                  );
                })}
              </ContentCategoria>

              {categoryClicked ? (
                <ContentShop
                  name={generalCategory.toUpperCase()}
                  getItemShop={getItemShop}
                >
                  <BiggerCardComponent
                    imageUrl="https://source.unsplash.com/vZJdYl5JVXY/660x360"
                    title="Bigger component title"
                    description="bigger component description"
                  />
                </ContentShop>
              ) : (
                <>
                  <ContentShop name={nameCategory} getItemShop={getItemShop}>
                    {dataShopAsync.map((item) => {
                      return (
                        <CardComponent
                          imageUrl={item.imageUrl}
                          imageAlt={item.imageAlt}
                          title={item.title}
                          description={item.description}
                        />
                      );
                    })}
                  </ContentShop>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
      <FooterTienda href="/" />
    </motion.div>
  );
};

export default ShopPage;
