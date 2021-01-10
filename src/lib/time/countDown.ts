import React, { useState, useEffect} from 'react';
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


function countDown(date, identity) {
  
    let past: number = new Date(date).getTime(); 
    let now: number = mainTime().getTime();
  
    let difference: number = identity? now - past : past - now

    let totalHour: number = Math.floor(difference / (1000 * 60 * 60));
    let totalMinutes: number = Math.floor((difference / 1000) / 60);
    let totaldays: number = Math.floor(difference / (1000 * 60 * 60 * 24));
    let totalMonths: number = Math.floor(difference / (1000 * 60 * 60 * 24 * 31));
    
    
    let days: number = Math.floor(difference / (1000 * 60 * 60 * 24) - totalMonths);
    let hours: number = Math.floor((((difference / 1000) / 60) / 60) - totaldays * 24);
    let minutes: number = Math.floor(((difference / 1000) / 60) - totalHour * 60);
    let seconds: number = Math.floor((difference / 1000) - totalMinutes * 60);

  return new Array(days, hours, minutes, seconds)

}

