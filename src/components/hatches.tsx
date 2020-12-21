import "firebase/database";
import styled from "styled-components";
import Title from '../styles/title'
import React, { useState, useEffect } from 'react';

import colorFinder from '../lib/kalendar/colorFinder'
import firebase from '../lib/firebase/firebase'
import months from '../lib/time/findMonth'

import monthCheck from '../lib/time/monthUpdate'

const Hatch = styled.div `
box-shadow: 1px 1px 8px 6px rgba(58, 58, 58, 0.096);
border-radius: 10px;
width: 10vw;
text-align: center;
background-color: ${props => props.color} ;
`

const HatchClose = styled(Hatch) `

background-image: linear-gradient(120deg, rgba(214, 22, 8, 0.658) , rgba(187, 6, 30, 0.616));
color: rgba(43, 43, 43, 0.836);

`

const Text = styled(Title) `
  font-size: 1.6vw;
  padding-top: 0vh;
`

const Alert = styled(Text) `
font-size: 1.2vw;
`

let day = new Date().getDate()
const database = firebase.firestore();




function daySeparate(i, data, x) {
  if ((i + day) === data[2]) {
    return data[x]
  } else {
    return " "
  }
}


export default function Hatches(props) {
  let array = new Array()
  
  let dataArray = new Array()
  let dataArray2 = new Array()
  let dataArray3 = new Array()

  let graphLength: number = 24
  let currentMonth = new Date().getMonth()


  // states

const [data, setData] = useState(new Array());
const [data2, setData2] = useState(new Array());
const [data3, setData3] = useState(new Array());

useEffect(() => {
  database.collection('prov').get().then((snapshot) =>{
    snapshot.docs.forEach(doc => {
        array.push(doc.data().prov)

    })

  for (let i = 0; i < graphLength; i++) {
    for (const c in array) {
      if (i + day === array[c][2]) {
        switch(array[c][6]) {
          case "091":
            console.log(array[c])
            setData(array[c])
            break;
          case "092":
            setData2(array[c])
            break;
          case "093":
            setData3(array[c])
            break;
        }
    
      } 
    }
  }



})
}, []);



for (let i = 0; i < graphLength; i++) {
  let currentMonth = new Date().getMonth()
  let target: any[] = []
  const date = monthCheck(i + day, currentMonth)

  switch (props) {
    case "091":
      target.push(data)
      break;
    case "092":
      target.push(data2)
      break;
    case "093":
      target.push(data3)
      break;
  }


  array.push(<Hatch color={colorFinder(daySeparate(i, target[0], 4))} key={i}>{date[0]} {months[date[1]]} {daySeparate(i, target[0], 4)} <Alert>{daySeparate(i, target[0], 5)} </Alert></Hatch>)



}

return array
}


