
import shrek from './assets/main.png';
import pluralCheck from './scripts/pluralCheck'
import { Link } from 'react-router-dom';

import staticDay from './scripts/staticDayCount'
export default function App() {

  let time = staticDay()

  return (
    <>

    <div className="text-box">

    <h1 className="title">Välkommen till Potatisen.com!</h1>
    <p className="main-text">Här kan du snabbt och enkelt kolla veckobrevet utan något strul</p>

    <img src={shrek}  alt="img" className="main-img"></img>

    <Link to="/veckobrev">
    <button className="btn-hem">Veckobrev</button>
    </Link>
    
    </div>

    <div className="news-pad" id="christmas">

    <h1> {time} {pluralCheck(time)[0]} kvar till julafton. God jul! 🎄</h1>
    </div>
    
    </>
  )

}

