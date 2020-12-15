import React, { useState, useEffect} from 'react';
import pluralCheck from './pluralCheck'
import mainTime from './mainTime'

export default function Bruh(date: any, type: any) {
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {

      let text: any = countDown(date, type)

      setText(text);

    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    text
  );
}


function countDown(date, type) {
  
    let past = new Date(date).getTime(); 
    let now = mainTime().getTime();

    let output = []
  
    let difference;

    if (type === true) {
      difference = now - past
    } else {
      difference = past - now
    }
  
    let totalHour = Math.floor(difference / (1000 * 60 * 60));
    let totalMinutes = Math.floor((difference / 1000) / 60);
    let totaldays = Math.floor(difference / (1000 * 60 * 60 * 24));
    let totalMonths = Math.floor(difference / (1000 * 60 * 60 * 24 * 31));
    
    
    let days = Math.floor(difference / (1000 * 60 * 60 * 24) - totalMonths);
    let hours = Math.floor((((difference / 1000) / 60) / 60) - totaldays * 24);
    let minutes = Math.floor(((difference / 1000) / 60) - totalHour * 60);
    let seconds = Math.floor((difference / 1000) - totalMinutes * 60);

    output.push(days)
    output.push(hours)
    output.push(minutes)
    output.push(seconds)


  return output 

}

