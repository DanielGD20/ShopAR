import { firestore } from "../../firebase/admin";

function getShops(req, res) {
  firestore
    .collection("shops")
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
}

export default getShops;
