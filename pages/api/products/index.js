const dataItemShop = [
  {
    id: "001",
    title: "Imagen de prueba 1",
    alt: "Tienda 1",
    image: "https://source.unsplash.com/random",
    href: "/tienda",
  },
];

export default (req, res) => {
  (res.statusCode = 200), res.setHeader("content-type", "application/json");
  res.end(JSON.stringify({ data: dataItemShop }));
};
