import { firestore } from "../../firebase/admin";

export default (req, res) => {
  firestore
    .collection("categorias")
    .get()
    .then((snapshot) => {
      let sendData = [];
      snapshot.docs.map((doc) => sendData.push(doc.data()));
      res.json(sendData);
      res.status(500).end();
    })
    .catch(() => {
      res.status(404).end();
    });
};
