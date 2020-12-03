import countdown from './scripts/countdown'
import shrek from './assets/main.png';
import pluralCheck from './scripts/pluralCheck'
import { Link } from 'react-router-dom';

export default function App() {

  let time = countdown("dec 25, 2020 00:00:00", false)

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

    <h1> {time[0]} {pluralCheck(time)[0]} kvar till julafton. God jul! 🎄</h1>
    </div>
    
    </>
  )

}

