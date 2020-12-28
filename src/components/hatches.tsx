import "firebase/database";
import styled from "styled-components";
import Title from "../styles/title";
import React, { useState, useEffect } from "react";

import colorFinder from "../lib/kalendar/colorFinder";
import firebase from "../lib/firebase/firebase";
import months from "../lib/time/months";
import monthCheck from "../lib/kalendar/monthCheck";
import pluralCheck from "../lib/time/pluralCheck";
import monthsLenght from "../lib/time/monthsLenght";

const Hatch = styled.div`
  box-shadow: 1px 1px 8px 6px rgba(58, 58, 58, 0.096);
  border-radius: 15px;
  width: 8vw;
  height: auto;
  text-align: center;
  background-color: rgba(${(props) => props.color});

  @media only screen and (max-height: 768px) {
    width: 10vw;
    }

`;




const Text = styled(Title)`
  font-size: ${props => props.size};
  padding-top: 0vh;

  @media only screen and (max-height: 768px) {
    font-size: ${props => props.size};
    }
`;

const Alert = styled(Text)`
  font-size: 1rem;
`;

// stuff
const day = new Date().getDate();
const currentMonth = new Date().getMonth();
const database = firebase.firestore();
const graphLength: number = 24;
const graphStart: number = 0;



function daysLeft(i) {
  if (day + i - day === 0) {
    return pluralCheck(day + i - day, "", "", "")[0];
  } else {
    return (
      day + i - day  +" " + pluralCheck(day + i - day, "", "", "")[0] + " " + "kvar"
    );
  }
}

function multiTest(data, language, ugg, i) {
  let target = new Array();
  let emoji: string = "";
  const date = monthCheck(i + day, currentMonth);



  if (i + day === day) {
    emoji += "📍";
  }

  for (const item in data) {

    if (i + day == data[item][2]) {

      if (data[item][6] === "alla" && data[item][4] === language) {
        target[0] = data[item];
      } else if (data[item][6] != "alla" && data[item][6] === ugg) {
        target[0] = data[item];
      }
    } else if (data[item][2] < day + graphStart ) {
      if ( currentMonth - data[item][1] === 11 || currentMonth - data[item][1] === -1) {
        data[item][2] = data[item][2] + monthsLenght[currentMonth]
      }
    }
  }

  

  if (target[0] === undefined) {
    return (
      <Hatch key={i}>
        {date[0]} {months[date[1]]} {emoji} 
      </Hatch>
    );
  } else {
    if (day > i + day) {
      return (
        <Hatch color={colorFinder(target[0][4], "0.1")} key={i}>{date[0]} {months[date[1]]} {emoji} {target[0][4]} <Alert>{target[0][5]} ✔ </Alert> klart{" "}</Hatch>
      );
    } else {

      return (
        <>
        <Hatch color={colorFinder(target[0][4], "0.6")} key={i}> <Text size="1em"> {date[0]} {months[date[1]]} {target[0][4]}  </Text> <Alert>{target[0][5]}  </Alert> <Text size="0.7em">  {target[0][3].start}:00 -{" "} {target[0][3].end}:00 <p> {daysLeft(i)}  </p> </Text> </Hatch>
        </>
      ); // fix error later
    }
  }      
}

function calendarGen(ugg, language, totalData) {
  let output: any[] = [];

  for (let i = graphStart; i < graphLength; i++) {

    if (i + day < 42 || i + day < 42) {
      output.push(<Hatch key={i} color={colorFinder("Ma", "0.4")}> {monthCheck(i + day, currentMonth)[0]} {months[monthCheck(i + day, currentMonth)[1]]} <Alert>Jullov ☃️ </Alert></Hatch>)
    } else {

      output.push(multiTest(totalData, language, ugg, i));
  }
}

  return output;
}

export default function Hatches(props) {
  let array = new Array();

  // states
  const [Data, setData] = useState(
    new Array(new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array())
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
            Data.push(array[c])
          }
        setTotalData(Data);

      });
  }, []);
  
  return <>
  

  {calendarGen(props.ugg, props.language, totalData)} </>;
}