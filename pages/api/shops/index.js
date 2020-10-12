const dataShops = [
  {
    id: "001",
    title: "Bershka",
    alt: "Tienda 1",
    image: "https://source.unsplash.com/random",
    href: "/tienda",
  },
  {
    id: "002",
    title: "Pull&bear",
    alt: "Tienda 2",
    image: "https://source.unsplash.com/random",
    href: "/tienda",
  },
  {
    id: "003",
    title: "Sara",
    alt: "Tienda 3",
    image: "https://source.unsplash.com/random",
    href: "/tienda",
  },
  {
    id: "004",
    title: "ShopAR Souvenirs",
    alt: "Tienda 4",
    image: "https://source.unsplash.com/random",
    href: "/tienda",
  },
];

export default (req, res) => {
  (res.statusCode = 200), res.setHeader("content-type", "application/json");
  res.end(JSON.stringify({ data: dataShops }));
};
