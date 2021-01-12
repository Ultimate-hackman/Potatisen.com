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

const Text = styled(Title)`
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  padding-top: 0vh;
`;

const currentMonth: number = mainTime().getMonth();
const database = firebase.firestore();

const monday: number = (mainTime().getDay() -1)
let day: number = mainTime().getDate() - monday


function dayMaker(itemData, saturation, i, date, weekIndex, count, duplicate, state) {
  let weekDay = weekDays[weekIndex] 
  let emoji: string[] = new Array();
  let msg: string = ""
  let color: string = ""
  let cursor: string = ""

  let sizes: string[] = ["2vh", "1.2vh"]

  let daysToGo = daysLeft(i)
  
  if (daysToGo[0] === "-") {
    daysToGo = ""
    emoji.push("✔")
    saturation /= 1.5
  }

  
  if(weekIndex === 0 || weekIndex === 6) {
    emoji.push("🌴")
    msg += "helg"
  } else {

    if (itemData  === undefined) {
      color += "noTest"

    } else {
      color += itemData[5]

      if (count >= 2) {
        emoji.push("❗️")
        cursor +="pointer"
      }
    }


  }
  return <Hatch cursor={cursor}onClick={() => state(duplicate(i + day))}  color={colorFinder(color, saturation/2)} key={i}>  <Text size={sizes[0]}> {date[0]} {months[date[1]]} {itemData[5]}{emoji}  </Text> <Text size={sizes[0]}>{itemData[6]}  </Text> <Text size={sizes[1]}>  {itemData[3]}-{itemData[4]} <br></br> {daysToGo}  <p>  {weekDay}</p>  </Text>   </Hatch>
}

function daysLeft(i) {
  i -= monday
  if (i === 0) {
    return pluralCheck(day + i - day, "", "", "")[0];
  } else {
    return (
      day + i - day  +" " + pluralCheck(day + i - day, "", "", "")[0] + " " + "kvar"
    );
  }
}



function multiTest(data, language, ugg, weekIndex, i, state, saturation, len) {
  let target = new Array();
  let emoji: string[] = new Array();
  const date = monthCheck(i + day, currentMonth);
  let count: number = 0

        
  let current: number = new Date().getDate() + (mainTime().getFullYear() * 365) + totalMonth(currentMonth);




  let weekDay = weekDays[weekIndex] 

  if (i === monday) {
    emoji.push("📍")
  }

  let filterData = new Array()
  data.forEach (item =>
    {
      let dataTime: number = item[2] + (item[0] * 365) + (totalMonth(item[1]) +1 )
    
      let distance =  dataTime - current
  
      if (date[0] === item[2] && distance < len && distance > -monday && (item[7] === ugg || item[7] === "alla"  || item[7] === "MO" && item[5] === language)) {
        count += 1
        
        target = item;
        filterData.push(target)
      }
    }
    
    ) 
    
 
  function duplicate(time) {
    let output = []
    filterData.forEach (item =>
      {if (item[2] === time) {
        output.push( <Hatch  color={colorFinder(item[4], "0.8")} > <Text size="2vh"> {date[0]} {months[date[1]]}  {item[4]}   </Text>   <Text size="2vh">{item[5]}</Text>  <Text size="1.2vh">  {item[3].start[0]}:{item[3].start[1]} - {item[3].end[0]}:{item[3].end[1]} <p> {daysLeft(i)} <br></br> {weekDay} </p>  </Text> </Hatch>)}
      }      
      ) 
    return output
  }

  
  if (weekIndex === 6 || weekIndex === 0) {
    return <Hatch key={i} color={colorFinder("en",  saturation/2)}>  <Text size="2vh" weight="normal"> {date[0]} {months[date[1]]}{emoji} </Text> <Text size="2vh">Helg🌴 </Text>  <Text size="1.5vh" weight="normal">{weekDay}</Text> </Hatch>
  } else {
    if (target[0] === undefined) {
      return <Hatch> <Text size="2vh" weight="normal"> {date[0]} {months[date[1]]}{emoji} </Text>   <Text size="2vh" weight="normal">{weekDay}</Text>   </Hatch>
  
    } else {
          return dayMaker(target, saturation, i, date, weekIndex, count, duplicate, state)
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
    output.push(multiTest(totalData, language, ugg, weekDay, i, state, 1.1, len));
    
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