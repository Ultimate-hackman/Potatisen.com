import "firebase/database";
import firebase from "../firebase/firebase";
import React, { useState, useEffect } from "react";
import mainTime from '../time/mainTime'
import monthsLenght from '../time/monthsLenght'

function totalMonth(num) {

  let output: number = 0
  for (let i = 0; i < num; i+=1) {
    output += monthsLenght[i]
  }
  return output
}

export default function stressPT(ugg, language) {
    const database = firebase.firestore();
    let pT: number = 0
    const currentMonth = mainTime().getMonth();
    const currentYear = mainTime().getFullYear();

    let day = mainTime().getDate()

    let array = new Array();

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

    for (const c in totalData) {

        let current: number = day + (currentYear *365) + totalMonth(currentMonth);

        let target: number = totalData[c][2] + (totalData[c][0] * 365) + totalMonth(totalData[c][1])
  
        let distance =  target - current

        console.log(distance + " " + totalData[c][5])

        if (distance >= 0 && totalData[c][6] === ugg || totalData[c][4] === language ) {
          if (distance < 100 && current <= target) {
            pT += 100 - distance 
          }
        }

    }
    return pT
    
}