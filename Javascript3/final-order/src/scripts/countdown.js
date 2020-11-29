import React, {Component, useState, useEffect} from 'react';


function Bruh() {
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {

      setText(countDown());

    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    text
  );
}






function countDown() {

  

  let date = "sep 13, 2020 18:27:00"
  let x = true



  
    let past = new Date(date).getTime(); 
    let now = new Date().getTime();
  
    let difference = 0
    if (x == true) {
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


    let time = pluralCheck(days, hours, minutes, seconds)

  return <p> Online sedan: {days} {time[0]} {hours} {time[1]} {minutes} {time[2]}  {seconds} {time[3]} </p>
  

  console.log("aw")


  

 

  
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



export default Bruh;