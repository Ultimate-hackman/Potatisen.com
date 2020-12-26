import "firebase/database";
import styled from "styled-components";
import Title from "../styles/title";
import React, { useState, useEffect } from "react";

import colorFinder from "../lib/kalendar/colorFinder";
import firebase from "../lib/firebase/firebase";
import months from "../lib/time/findMonth";
import monthCheck from "../lib/kalendar/monthUpdate";
import pluralCheck from "../lib/time/pluralCheck";
import monthsLenght from '../lib/time/monthsLenght'

const Hatch = styled.div`
  box-shadow: 1px 1px 8px 6px rgba(58, 58, 58, 0.096);
  border-radius: 15px;
  width: 10vw;
  height: auto;

  text-align: center;
  background-color: ${(props) => props.color};
`;




const Text = styled(Title)`
  font-size: ${props => props.size};
  padding-top: 0vh;
`;

const Alert = styled(Text)`
  font-size: 1.2vw;
`;

// stuff
const day = new Date().getDate();
const currentMonth = new Date().getMonth();
const database = firebase.firestore();
const graphLength: number = 24;
const graphStart: number = -1;



function daysLeft(i) {
  if (day + i - day === 0) {
    return pluralCheck(day + i - day, "", "", "")[0];
  } else {
    return (
      day + i - day  +" " + pluralCheck(day + i - day, "", "", "")[0] + " " + "kvar"
    );
  }
}

function multiTest(data, i) {
  let target = new Array();
  let emoji: string = "";
  const date = monthCheck(i + day, currentMonth);



  
  

  if (i + day === day) {
    emoji += "📍";
  }

  for (const item in data) {
    if (i + day == data[item][2]) {
      target[0] = data[item];
    } else if (data[item][2] < day + graphStart ) {
      if ( currentMonth - data[item][1] === 11 || currentMonth - data[item][1] === -1) {
        data[item][2] = data[item][2] + monthsLenght[currentMonth]
      }
    }
  }

  if (target[0] === undefined) {
    return (
      <Hatch key={i}>
        {date[0]} {months[date[1]]} {emoji}{" "}
      </Hatch>
    );
  } else {
    if (day > i + day) {
      return (
        <Hatch color={colorFinder(target[0][4], "10")} key={i}>{date[0]} {months[date[1]]} {emoji} {target[0][4]}{" "} <Alert>{target[0][5]} ✔ </Alert> klart{" "}</Hatch>
      );
    } else {

      return (
        
        <>
        
        <Hatch color={colorFinder(target[0][4], "75")} key={i}> <Text size="1em"> {date[0]} {months[date[1]]} {target[0][4]}  </Text> <Alert>{target[0][5]}  </Alert> <Text size="0.5em">  {target[0][3].start}:00 -{" "} {target[0][3].end}:00 <p> {daysLeft(i)}  </p> </Text> </Hatch>
        </>
      ); // fix error later
    }
  }
}

function calendarGen(props, totalData) {
  let array: any[] = [];

  for (let i = graphStart; i < graphLength; i++) {


    switch (props) {
      case "091":
        array.push(multiTest(totalData[0], i));
        break;
      case "092":
        array.push(multiTest(totalData[1], i));
        break;
      case "093":
        array.push(multiTest(totalData[2], i));
        break;
    }
  }

  return array;
}

export default function Hatches(props) {
  let array = new Array();

  // states
  const [Data, setData] = useState(
    new Array(new Array(), new Array(), new Array())
  );
  const [totalData, setTotalData] = useState(new Array());

  useEffect(() => {
    database
      .collection("prov")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          array.push(doc.data().prov);
        });

          for (const c in array) {

              switch (array[c][6]) {
                case "091":
                  Data[0].push(array[c]);
                  break;
                case "092":
                  Data[1].push(array[c]);
                  break;
                case "093":
                  Data[2].push(array[c]);
                  break;
              }

          }

        setTotalData(Data);

      });
  }, []);
  
  return <>
  

  {calendarGen(props.ugg, totalData)} </>;
}
