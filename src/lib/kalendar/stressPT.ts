import "firebase/database";
import firebase from "../firebase/firebase";
import React, { useState, useEffect } from "react";
import mainTime from '../time/mainTime'
import monthsLenght from '../time/monthsLenght'

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
        let distance: number = totalData[c][2]

        if (totalData[c][1] < currentMonth && currentYear === totalData[c][0]) {
          for (let i=totalData[c][1] + 1 ; i <= currentMonth -1;i+=1 ) {
            distance += monthsLenght[i]
            console.log(i)
          }
        }else if (totalData[c][1] === 0  && currentMonth === 11) {
          distance += monthsLenght[11]
          console.log(distance)
        } else if (totalData[c][1] > currentMonth && currentYear === totalData[c][0]){
          for (let i=currentMonth +1 ; i >= totalData[c][1] -1;i+=1 ) {
            distance += monthsLenght[i]
          }
        }
 
        if (ugg === totalData[c][6] ||language === totalData[c][4]) {
          pT += 100 - (distance- day)
        }
    }


    return pT
    
}