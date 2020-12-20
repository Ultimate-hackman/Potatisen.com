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



//
function HatchMake({ i }) {

let array: any = new Array()
let currentMonth = new Date().getMonth()


// states
const [info, setInfo] = useState(undefined);
const [subject, setSubject] = useState(undefined);
const [color, setColor] = useState(undefined)
const [start, setStart] = useState(undefined)
const [end, setEnd] = useState(undefined)

const date = monthCheck(i[0], currentMonth)

useEffect(() => {
  database.collection('prov').get().then((snapshot) =>{
    snapshot.docs.forEach(doc => {
        array.push(doc.data().prov)

    })


array?.map((_, index) => {
  // checks if day has test

  if (i[0] === array[index][2] && i[1] === array[index][6]) {
    // sets info
    setInfo(array[index][5])
    setSubject(array[index][4])
    setStart(array[index][3].start)
    setEnd(array[index][3].end)

    // color
    setColor(colorFinder(array[index][4]))
  } 

})

})
}, []);


    return (
      <Hatch key={i} color = {color}>{date[0]} {months[date[1]]} {subject} <Alert> {info}  </Alert> {start} - {end}  {i[1]}  </Hatch>
    )


}

export default function Hatches(props) {

  console.log(props)

  

  if (props === "091") {
    return Array.from({ length: 24 }).map((_, index) => {
      return <HatchMake key={index} i={  [(index + day), props] }/>;
    });
  } else if (props ==="093") {
    return Array.from({ length: 24 }).map((_, index) => {
      return <HatchMake key={index * -1} i={  [(index + day), props] }/>;
    });
  } else if (props === "092") {
    return Array.from({ length: 24 }).map((_, index) => {
      return <HatchMake  i={  [(index + day), props] }/>;
    });
  }
}

