import "firebase/database";
import styled from "styled-components";
import Title from "../../styles/title";

import totalMonth from "../../lib/time/totalMonth"
import colorFinder from "../../lib/calendar/colorFinder";
import months from "../../lib/time/months";
import monthCheck from "../../lib/calendar/monthCheck";
import pluralCheck from "../../lib/time/pluralCheck";
import weekDays from '../../lib/time/weekDay';
import Hatch from "../../styles/hatch"

const Text = styled(Title)`
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  padding-top: 0vh;
`;

const currentMonth: number = new Date().getMonth();

const monday: number = (new Date().getDay() -1)
let day: number = new Date().getDate() - monday


function dayMaker(itemData, saturation, i, date, weekIndex, count, duplicate, state, duplicateChild, data) {
  let weekDay = weekDays[weekIndex] 
  let emoji: any[] = new Array();
  let color: string = ""
  let cursor: string = ""



  let weight: string = "normal"

  let sizes: string[] = ["2vh", "1.2vh"]
  let hours = ""

  let daysToGo = daysLeft(i)
  
  if ( new Date().getDate() === i + day && date[1] === currentMonth) {
    emoji.push("📍") 
  }

  
  if(weekIndex === 0 || weekIndex === 6) {
    emoji.push(<> <br/> <Text size="2vh">helg🌴</Text></>)
    color += "en"
    daysToGo =""
    sizes[1] = "2vh"
    sizes[0] = "2vh"
  
    
  } else {

    if (itemData[0]  === undefined) {
      color += "NOTEST"
      sizes[1] = "2vh"
      daysToGo =""
      


    } else {
      weight = "bold"
      hours = itemData[4]

      color += itemData[1]

      if (daysToGo > 0) {
        daysToGo = ""
        emoji.push("✔")
        saturation /= 1.5
      }

      if (count >= 2 && duplicateChild === false) {
        emoji.push("❗️")
        cursor +="pointer"
      }
    }
    
    if (data[0] == undefined && (Math.floor(Math.random() * 15) == 1)) {
      color = "So"
      saturation = 0.3
    }


  }
  return <Hatch cursor={cursor}onClick={() =>{ if (count >=2 ) {state(duplicate(i + day))}}}  color={colorFinder(color, saturation/2)} key={i}>  <Text weight={weight} size={sizes[0]}> {date[0]} {months[date[1]]}   {itemData[1]}<small>{emoji}</small> </Text> <Text weight={weight} size={sizes[0]}>{itemData[2]}  </Text> <Text weight={weight} size={sizes[1]}>  {itemData[0]?.split(',')[1]} <Text size={sizes[1]}>{hours}</Text> {daysToGo}  {weekDay}  </Text>   </Hatch>
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
  const date = monthCheck(i + day, currentMonth);
  let count: number = 0

        
  let current: number = new Date().getDate() + (new Date().getFullYear() * 365) + totalMonth(currentMonth);



  let filterData = new Array()
  data.forEach (item =>
    {
      
      let time = new Date((item[0] + " ").split(',')[0])

      let dataTime: number = time.getDate() + (time.getFullYear() * 365) + (totalMonth(time.getMonth()) +1 )
    
      let distance =  dataTime - current

  
      if (date[0] === time.getDate() && distance < len && distance > -monday && (item[3] === ugg || item[3] === "alla" || (item[3] === "MO" && item[1] === language)) ) {
        count += 1
        target = item;
        filterData.push(target)
      }
    }
    
    ) 
    
 
  function duplicate(time) {
    let output = []
    filterData.forEach (item =>
      {if (new Date(item[0].split(',')[0]).getDate() === time) {
        output.push(dayMaker(item, saturation, i, date, weekIndex, count, duplicate, state, true, filterData))}
      }) 
    return output
  }


    return dayMaker(target, saturation, i, date, weekIndex, count, duplicate, state, false, data)
  
  
         
}

function calendarGen(ugg, language, totalData, state, len) {
  let output: object[] = [];
  let weekDay: number = new Date().getDay() - monday - 1

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
  return <>
  {calendarGen(props.ugg, props.language, props.data, props.state, props.len)} </>;

}