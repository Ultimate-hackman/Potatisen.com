
import "firebase/firestore"


import ImageGen from './image'
import styled from 'styled-components'


function Luckor() {

    // finds day, ImageGen returns corresponding image
    function countUp2() {

  

        let date = "dec 24, 2020 24:00:00"
        
          let future = new Date(date).getTime(); 
          let now = new Date().getTime();
        
          
          
          let difference = future - now
      
          let totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
        
      
      
        return totalDays     
        
      }

    

    

    let day = (24 - countUp2);
    


    // generates kalander


    let array = []

   
    for (let i=1; i<=24; i+=1) {
        

        let emoji = ''

        if (i == 24) {
            emoji += "🎄"
        } else {
            emoji += ""
        }

        if (i < day) {
            array.push(<div class="lucka" key={i}><h1 class="luck-text">Dag {i}  {emoji} 🔴 </h1></div>)
        } else if (i == day) {
            array.push(<div class="lucka" key={i}><h1 class="luck-text">Dag {i}  {emoji} </h1></div>)
        } else {
            array.push(<div class="lucka-stängd" key={i}><h1 class="luck-text">Dag {i}  {emoji} </h1></div>)
        }

        
    }

    
    
    
    
    
    

    return array

    


   

}



export default Luckor

