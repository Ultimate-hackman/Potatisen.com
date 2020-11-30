


import countUp from './scripts/countup'

import shrek from './assets/main.png';

import dagar from './scripts/plural'

import { Link } from 'react-router-dom';

function App() {



  return (
    <>


    <div class="text-box">

    <h1 class="title">Välkommen till Potatisen.com!</h1>
    <p class="main-text" >Här kan du snabbt och enkelt kolla veckobrevet utan något strul</p>

    <img src={shrek}  alt="img" class="main-img"></img>

    <Link to="/veckobrev">
    <button class="btn-hem"><a class="btn-text">Veckobrev</a></button>
    </Link>
    
    </div>

    <div class="news-pad" id="christmas">

    <h1> {countUp()} {dagar()} kvar till julafton. God jul! 🎄</h1>
    </div>
    

    </>
  )

}

export default App;
