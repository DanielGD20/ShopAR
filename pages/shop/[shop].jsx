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
import Loader from "../../components/general_components/Loader";

//Fetcher para tomar los datos del api
const fetcher = (url) => fetch(url).then((res) => res.json());

const ShopPage = () => {
  //Controladores de estado
  const [categoryClicked, setCategoryClicked] = useState(true);
  const [nameCategory, setNameCategory] = useState("");
  const [dataShopAsync, setDataShopAsync] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [clickedBigger, setClickedBigger] = useState(false);

  //Multiples fetch por componentes
  let categorias = [];
  const { data } = useSWR("/api/categorias", fetcher);
  data == undefined ? (categorias = []) : (categorias = data);

  //Uso de router para obtener querys y categorias
  const router = useRouter();
  const { shop } = router.query;
  const generalCategory = shop + " Comunica";

  //Funcion para renderizar los datos de un componente hijo clickeado
  const changeDataShop = (newState) => {
    console.log(newState);
    if (newState == false) {
      loader();
      setCategoryClicked(newState);
      setLoading(true);
      console.log(isLoading);
    } else {
      setCategoryClicked(newState);
    }
  };
  const getCategoryName = (nameCategory) => {
    setNameCategory(nameCategory.toUpperCase());
    console.log(nameCategory);
  };
  const getItemShop = (items) => {
    items == undefined ? setDataShopAsync([]) : setDataShopAsync(items);
    console.log(dataShopAsync);
  };

  const loader = () => {
    console.log("loader");
    if (dataShopAsync.length == 0) {
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    } else {
      setLoading(false);
    }
  };

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
          // descripcion="¡Selecciona la categoría de interés y deisfruta de la realidad aumentada!"
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
                      changeDataShop={changeDataShop}
                      getCategoryName={getCategoryName}
                    />
                  );
                })}
              </ContentCategoria>
              {clickedBigger ? (
                <>
                  <ContentShop name="new" getItemShop={getItemShop}>
                    {dataShopAsync.map((item) => {
                      return (
                        <CardComponent
                          imageUrl={item.imageUrl}
                          imageAlt={item.imageAlt}
                          title={item.title}
                          description={item.description}
                          isNuevo={item.nuevo != undefined ? item.nuevo : false}
                          imgQR={item.imgQR}
                        />
                      );
                    })}
                  </ContentShop>
                </>
              ) : categoryClicked ? (
                <ContentShop
                  name={generalCategory.toUpperCase()}
                  getItemShop={getItemShop}
                >
                  <BiggerCardComponent
                    imageUrl="/images/new.gif"
                    title="¡Conóce las primeras implementaciones en Realidad Aumentada!"
                    description="No te quedes sin probarlo, selecciona 'NUEVOS' en el menú"
                    changeDataShopBigger={changeDataShop}
                  />
                  <BiggerCardComponent
                    imageUrl="/images/black.gif"
                    title="¡Se acerca Black Friday!"
                    description="Conóce nuestras ofertas %"
                    changeDataShopBigger={changeDataShop}
                  />
                  <BiggerCardComponent
                    imageUrl="https://media.giphy.com/media/PtLRJXYSWDGOk/giphy.gif"
                    title="Conóce Nuestras Ofertas del Día"
                    description="No te quedes sin su producto"
                    changeDataShopBigger={changeDataShop}
                  />
                </ContentShop>
              ) : (
                <>
                  <ContentShop name={nameCategory} getItemShop={getItemShop}>
                    {isLoading ? (
                      dataShopAsync == 0 ? (
                        <Loader />
                      ) : (
                        dataShopAsync.map((item) => {
                          return (
                            <CardComponent
                              imageUrl={item.imageUrl}
                              imageAlt={item.imageAlt}
                              title={item.title}
                              description={item.description}
                              isNuevo={
                                item.nuevo != undefined ? item.nuevo : false
                              }
                              imgQR={item.imgQR}
                            />
                          );
                        })
                      )
                    ) : (
                      dataShopAsync.map((item) => {
                        return (
                          <CardComponent
                            imageUrl={item.imageUrl}
                            imageAlt={item.imageAlt}
                            title={item.title}
                            description={item.description}
                            isNuevo={
                              item.nuevo != undefined ? item.nuevo : false
                            }
                            imgQR={item.imgQR}
                          />
                        );
                      })
                    )}
                  </ContentShop>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
      <FooterTienda href="/menu" />
    </motion.div>
  );
};

export default ShopPage;
