import { firestore } from "../../firebase/admin";

const dataItems = {
  description: "Animación de un robot en realidad aumentada",
  imageAlt: "Robot Animado",
  imageUrl: "/images/animation.gif",
  title: "Robot Animado",
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
