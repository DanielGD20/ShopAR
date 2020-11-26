import { firestore } from "../firebase/admin";
import NextCors from "nextjs-cors";

export default async (req, res) => {
  //logica
  await NextCors(req, res, {
    //Options
    methods: ["GET"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
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
