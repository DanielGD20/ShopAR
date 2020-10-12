const dataShops = [
  {
    id: "001",
    title: "Imagen de prueba 1",
    alt: "Tienda 1",
    image: "https://source.unsplash.com/random",
    href: "/tienda",
  },
  {
    id: "002",
    title: "Imagen de prueba 2",
    alt: "Tienda 2",
    image: "https://source.unsplash.com/random",
    href: "/tienda",
  },
  {
    id: "003",
    title: "Imagen de prueba 3",
    alt: "Tienda 3",
    image: "https://source.unsplash.com/random",
    href: "/tienda",
  },
  {
    id: "004",
    title: "Imagen de prueba 4",
    alt: "Tienda 4",
    image: "https://source.unsplash.com/random",
    href: "/tienda",
  },
];

export default (req, res) => {
  (res.statusCode = 200), res.setHeader("content-type", "application/json");
  res.end(JSON.stringify({ data: dataShops }));
};
