
import brev from './assets/om-oss.png'

import countDown from './scripts/countdown'


export default function About() {
  
  return (
    
    <>
    <div className="text-box2">
    <div className="img-move-om-oss"><img src={brev} className="om-oss-img" alt="om-oss"></img></div>
    <p className="om-oss-txt">Potatisen.com grundades i september 2020 av mig, David H, med målet att hjälpa samtliga elever på södermalmsskolan genom att skapa användbara funktioner som löser problem. Det enda nuvarande exemplet av detta är att jag delar veckobrevet, men det kan räknas med att jag tillägger mer funktioner i kommande tid. Ingen reklam sedan 2020.</p>{countDown()}
    <button className="btn-hem">Hem</button> 

    </div>
    </>
  )

}

