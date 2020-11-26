import { firestore } from "../firebase/admin";

const dataItems = {
  description:
    "Fotografia tomada por un ovni al momento de estar debajo de el, IA",
  imageAlt: "Ovni",
  imageUrl: "/images/ovni.gif",
  title: "Foto tomada debajo del Ovni",
  imgQR: "/svgs/foto.svg",
  nuevo: true,
};

export default (req, res) => {
  const { query } = req;
  const { category } = query;

  firestore
    .collection("categorias")
    .doc(category)
    .collection("items")
    .add(dataItems)
    .catch((e) => {
      console.log(e);
    });
  res.status(200).json({ Info: "Subido correctamente" });
};
