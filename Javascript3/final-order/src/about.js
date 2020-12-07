import brev from './assets/om-oss.png'
import countDown from './scripts/countdown'
import pluralCheck from './scripts/pluralCheck'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Btn from './assets/styled/button'



export default function About() {

  let time = countDown("sep 13, 2020 18:27:00", true)
  let plural = pluralCheck(time[0], time[1], time[2], time[3])
  
  return (
    
    <>
    <div className="text-box2">
    <div className="img-move-om-oss"><img src={brev} className="om-oss-img" alt="om-oss"></img></div>
    <p className="om-oss-txt">Potatisen.com grundades i september 2020 av mig, David H, med målet att hjälpa samtliga elever på södermalmsskolan genom att skapa användbara funktioner som löser problem. Det enda nuvarande exemplet av detta är att jag delar veckobrevet, men det kan räknas med att jag tillägger mer funktioner i kommande tid. Ingen reklam sedan 2020.</p>{time[0]} {plural[0]}, {time[1]} {plural[1]}, {time[2]} {plural[2]}, {time[3]} {plural[3]}
    <Link to="/"><Btn>Hem</Btn></Link>

    </div>
    </>
  )

}

