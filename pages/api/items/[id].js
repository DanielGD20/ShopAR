import { firestore } from "../../firebase/admin";

export default (req, res) => {
  const { query } = req;
  const { id } = query;

  firestore
    .collection("categorias")
    .doc(id)
    .listCollections()
    .then((subCollections) => {
      subCollections.forEach((subCollection) => {
        subCollection.get().then((snapshot) => {
          let sendData = [];
          snapshot.docs.forEach((doc) => {
            sendData.push(doc.data());
          });
          console.log(sendData);
          res.json(sendData);
          res.status(500).end();
        });
      });
    });
};
