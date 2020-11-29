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

  

  let date = "dec 24, 2020 24:00:00"
  
    let future = new Date(date).getTime(); 
    let now = new Date().getTime();
  
    
    
    let difference = future - now

    let totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  


  return totalDays
  

  
}




export default Bruh2