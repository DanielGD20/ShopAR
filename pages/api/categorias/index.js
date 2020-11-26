import { firestore } from "../firebase/admin";
import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default (req, res) => {
  //cors
  // Run cors
  await cors(req, res);

  //logica
  firestore
    .collection("categorias")
    .orderBy("orden", "asc")
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
