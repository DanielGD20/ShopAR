import SearchBar from "../general_components/SearchBar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useSWR from "swr";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fetcher = (url) => fetch(url).then((res) => res.json());

const ContentShop = ({ name, children, getItemShop }) => {
  const nameSmall = name == "¡NUEVOS!" ? "new" : "new"; //name.toLowerCase()
  const [loadSpecial, setLoadSpecial] = useState(false);

  //Multiples fetch por componentes
  const { data } = useSWR(`/api/items/${nameSmall}`, fetcher);
  useEffect(() => {
    getItemShop(data);
  }, []);

  return (
    <div className="col-9">
      <div className="container">
        <div className="row">
          <div className="col-4 pt-2 ml-0 pl-0 pb-2">
            <h2>{name == "¡NUEVOS!" ? "NUEVAS IMPLEMENTACIÓNES" : name}</h2>
          </div>
          <SearchBar />
        </div>
      </div>

      <motion.div
        variants={stagger}
        className="row mr-2 overflow-auto page-overflow"
      >
        <section className="bg-light py-3">
          <div className="container">
            <div className="row">
              {loadSpecial ? <h1>AAAAAAAAAAAA</h1> : children}
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default ContentShop;
