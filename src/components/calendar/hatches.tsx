import "firebase/database";
import styled from "styled-components";
import Title from "../../styles/title";
import React, { useState, useEffect } from "react";


import totalMonth from "../../lib/time/totalMonth"
import colorFinder from "../../lib/kalendar/colorFinder";
import firebase from "../../lib/firebase/firebase";
import months from "../../lib/time/months";
import monthCheck from "../../lib/kalendar/monthCheck";
import pluralCheck from "../../lib/time/pluralCheck";
import mainTime from "../../lib/time/mainTime";
import weekDays from '../../lib/time/weekDay';
import Hatch from "../../styles/hatch"

const MultiHatch = styled(Hatch) `
cursor: pointer;
`


const Text = styled(Title)`
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  padding-top: 0vh;
`;

const currentMonth: number = mainTime().getMonth();
const database = firebase.firestore();

const monday: number = (mainTime().getDay() -1)
let day: number = mainTime().getDate() - monday

function daysLeft(i) {

  if (i === 0) {
    return pluralCheck(day + i - day, "", "", "")[0];
  } else {
    return (
      day + i - day  +" " + pluralCheck(day + i - day, "", "", "")[0] + " " + "kvar"
    );
  }
}



function multiTest(data, language, ugg, weekIndex, i, state, saturation) {
  let target = new Array();
  let emoji: string[] = new Array();
  const date = monthCheck(i + day, currentMonth);
  let count: number = 0

        
  let current: number = mainTime().getDate() + (mainTime().getFullYear() * 365) + totalMonth(currentMonth);




  let weekDay = weekDays[weekIndex] 

  if (i === monday) {
    emoji.push("📍")
  }

  

  let filterData: number[] = new Array()



  data.forEach (item =>
    {
      let dataTime: number = item[2] + (item[0] * 365) + (totalMonth(item[1]) +1 )
    
      let distance =  dataTime - current
  
      if (date[0] === item[2] && distance < 24 && distance > 0 && (item[6] === ugg || item[6] === "alla"  || item[6] === "MO" && item[4] === language)) {
        count += 1
        filterData.push(data[item])
        target = item;
      }
    }
    
    ) 
    
 
  function duplicate(time) {
    let output = []
    filterData.forEach (item =>
      {if (filterData[item][2] === time) {
        output.push( <Hatch color={colorFinder(filterData[item][4], "0.8")} > <Text size="2vh"> {date[0]} {months[date[1]]}  {filterData[item][4]}   </Text>   <Text size="2vh">{filterData[item][5]}</Text>  <Text size="1.2vh">  {filterData[item][3].start[0]}:{filterData[item][3].start[1]} - {filterData[item][3].end[0]}:{filterData[item][3].end[1]} <p> {daysLeft(i)} <br></br> {weekDay} </p>  </Text> </Hatch>)}}      
      ) 
    return output
  }

  
  if (weekIndex === 6 || weekIndex === 0) {
    return <Hatch key={i} color={colorFinder("en",  saturation/2)}>  <Text size="2vh" weight="normal"> {date[0]} {months[date[1]]}{emoji} </Text> <Text size="2vh">Helg🌴 </Text>  <Text size="1.5vh" weight="normal">{weekDay}</Text> </Hatch>
  }

  

  if (target[0] === undefined) {
    return (<Hatch key={i}> <Text size="2vh" weight="normal"> {date[0]}  {months[date[1]]}{emoji} </Text> <Text size="2vh" weight="normal">{weekDay}</Text></Hatch>
    );
  } 

    if (day > i + day) {
      return (
        <Hatch color={colorFinder(target[4],  saturation/10)} key={i}>{date[0]} {months[date[1]]}{emoji} {target[4]}  <Text size="1vh">{target[5]} ✔  </Text>klart  </Hatch>
      );
    } 
    
    
    if (day <= i + day){
      if (count >= 2) {
        return <MultiHatch onClick={() => state(duplicate(i + day))} color={colorFinder(target[4], saturation/2)} key={i}>  <Text size="2vh"> {date[0]} {months[date[1]]}   {target[4]} {emoji} ❗️ </Text>  <Text size="2vh">{target[5]}  </Text> <Text size="1.2vh">  {target[3].start[0]}:{target[3].start[1]} - {target[3].end[0]}:{target[3].end[1]} <p> {daysLeft(i)} <br></br> {weekDay}</p> </Text> </MultiHatch>  
      } else {
        return <Hatch  color={colorFinder(target[4], saturation/2)} key={i}>  <Text size="2vh"> {date[0]} {months[date[1]]} {target[4]}{emoji}  </Text> <Text size="2vh">{target[5]}  </Text> <Text size="1.2vh">  {target[3].start[0]}:{target[3].start[1]} - {target[3].end[0]}:{target[3].end[1]} <br></br> {daysLeft(i)}  <p>    {weekDay}</p>  </Text>   </Hatch>
      } 
      
    }
       
}

function calendarGen(ugg, language, totalData, state, len) {
  let output: object[] = [];
  let weekDay: number = mainTime().getDay() - monday - 1

  for (let i = 0; i < len; i++) {
    weekDay += 1
    if (weekDay >= 7) {
      weekDay -= 7
    }
    output.push(multiTest(totalData, language, ugg, weekDay, i, state, 1.1));
    
  }

  return output;
}


export default function Hatches(props) {
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
  
  return <>
  

  

  {calendarGen(props.ugg, props.language, totalData, props.state, props.len)} </>;
}