import React, {Component, useState, useEffect} from 'react';


function Bruh2() {
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {

      setText(countUp());

    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    text
  );
}






function countUp() {

  

  let date = "dec 24, 2020 00:00:00"
  let x = true



  
    let future = new Date(date).getTime(); 
    let now = new Date().getTime();
  
    
    
    let difference = future - now

  
    let totalHour = Math.floor(difference / (1000 * 60 * 60));
    let totalMinutes = Math.floor((difference / 1000) / 60);
    let totaldays = Math.floor(difference / (1000 * 60 * 60 * 24));
    let totalMonths = Math.floor(difference / (1000 * 60 * 60 * 24 * 31));
    
    
    let days = Math.floor(difference / (1000 * 60 * 60 * 24) - totalMonths);
    let hours = Math.floor((((difference / 1000) / 60) / 60) - totaldays * 24);
    let minutes = Math.floor(((difference / 1000) / 60) - totalHour * 60);
    let seconds = Math.floor((difference / 1000) - totalMinutes * 60);


    let time = pluralCheck(days, hours, minutes, seconds)

  return <p> {days} {time[0]} {hours} {time[1]} {minutes} {time[2]}  {seconds} {time[3]} </p>
  

  


  

 

  
}


function pluralCheck(days, hours, minutes, seconds) {

  let array = []

  if(days == 1) {
      array.push(" dag, ") 
  } else {
      array.push(" dagar, ")
  }

  if(hours == 1) {
      array.push(" timme, ")
  } else {
      array.push(" timmar, ")
  }

  if(minutes == 1) {
      array.push(" minut, ") 
  } else {
      array.push(" minuter, ") 
  }

  if(seconds == 1) {
      array.push(" sekund ") 
  } else {
      array.push(" sekunder ")
  }

  return array

  
}

export default Bruh2