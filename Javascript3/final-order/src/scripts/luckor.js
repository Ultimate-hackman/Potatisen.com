import 'firebase/database'; 
import countUp from './countup'


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

        let msg = <h1 className="hatch-text">Dag {i}  {emoji}</h1>

        if (i < day || i === day ) {
        array.push(<div className="hatch" key={i}>{msg}</div>)
        } else {
            array.push(<div className="hatch-closed" key={i}>{msg}</div>)
        }
        
    }

    return array

}




