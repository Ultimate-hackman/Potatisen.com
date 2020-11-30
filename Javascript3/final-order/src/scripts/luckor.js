
import "firebase/firestore"

import countUp from './countup'



function Luckor() {


    // generates kalander based on day

    let day = (24 - countUp);


    let array = []

    

   
    for (let i=1; i<=24; i+=1) {
        

        let emoji = ''

        if (i == 24) {
            emoji += "🎄"
        } else {
            emoji += ""
        }

        let msg = <h1 class="luck-text">Dag {i}  {emoji}  </h1>

        if (i < day) {
        array.push(<div class="lucka" key={i}>{msg}</div>)
        } else {
            array.push(<div class="lucka-stängd" key={i}>{msg}</div>)
        }

        
    }


    return array

}



export default Luckor

