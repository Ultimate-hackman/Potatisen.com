import "firebase/database";
import firebase from "../firebase/firebase";
import React, { useState, useEffect } from "react";
import mainTime from '../time/mainTime'
import monthsLenght from '../time/monthsLenght'
import totalMonth from '../time/totalMonth'




export default function stressPT(ugg, language, day) {
    const database = firebase.firestore();
    let time = new Array()
    let totalPt: number = 0
    const currentMonth = mainTime().getMonth();
    const currentYear = mainTime().getFullYear();

    

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


        if (distance >= 0 && (totalData[c][6] === ugg || totalData[c][5] === language || totalData[c][7] === "alla")  && current <= target ) {
            
            time.push(distance) 
            if (100 - distance > 0) {
              totalPt += 100 - distance 
            }

          
        }

        
    }

    function sortNumbers(a, b) {
      return a - b;
    }
    
    time.sort((a, b) => a- b)

    return [time, totalPt]
    
}