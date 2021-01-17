import React, { useState, useEffect } from "react";
import firebase from "../../lib/firebase/firebase";


function testData() {
    const database = firebase.firestore();
let array = []
const [totalData, setTotalData] = useState(new Array());

useEffect(() => {
  database
    .collection("prov")
    .get()

    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        array.push(doc.data().prov);
      });

      setTotalData(array);

    });
}, []);

return totalData
}

export default testData