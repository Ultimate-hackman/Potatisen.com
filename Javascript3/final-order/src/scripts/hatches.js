import 'firebase/database'; 
import countUp from './staticDayCount'


export default function Hatches() {
    // generates kalander based on day

    let day = (24 - countUp());

    let array = []

    for (let i=1; i<=24; i+=1) {
        
        let emoji = ''

        if (i === 24) {
            emoji += "🎄"
        } else {
            emoji += ""
        }

        let msg = <h1 className="luck-text">Dag {i}  {emoji}  </h1>

        if (i < day || i === day ) {
        array.push(<div className="lucka" key={i}>{msg}</div>)
        } else {
            array.push(<div className="lucka-stängd" key={i}>{msg}</div>)
        }
        
    }

    return array

}




