var admin = require("firebase-admin");

var serviceAccount = require("./firebasekey.json");

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://shopar-2020.firebaseio.com",
  });
} catch (e) {}

export const firestore = admin.firestore();
