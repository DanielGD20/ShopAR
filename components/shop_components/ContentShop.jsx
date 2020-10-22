import SearchBar from "../general_components/SearchBar";
import { motion } from "framer-motion";
import { useEffect } from "react";
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
  const nameSmall = name.toLowerCase();

  //Multiples fetch por componentes
  const { data } = useSWR(`/api/items/${nameSmall}`, fetcher);
  const items = data;

  useEffect(() => {
    getItemShop(items);
  }, []);

  return (
    <div className="col-9">
      <div className="container">
        <div className="row">
          <div className="col-4 pt-2 ml-0 pl-0">
            <h2>{name}</h2>
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
            <div className="row">{children}</div>
          </div>
        </section>
      </motion.div>
      <div className="generic"></div>
    </div>
  );
};

export default ContentShop;
