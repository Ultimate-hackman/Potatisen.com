
import shrek from './assets/main.png';
import pluralCheck from './scripts/pluralCheck'
import { Link } from 'react-router-dom';
import staticDay from './scripts/staticDayCount'
import styled from "styled-components";
import Btn from './assets/styled/button'
import Title from './assets/styled/title'
import NewsPad from './assets/styled/newsPad'


export default function App() {

  let time = staticDay("dec 25, 2020 00:00:00")

  return (
    <>

    <div className="text-box">

    <Title >Välkommen till Potatisen.com!</Title>
    <Title sub>Här kan du snabbt och enkelt kolla veckobrevet utan något strul</Title>

    <img src={shrek}  alt="img" className="main-img"></img>

    <Link to="/veckobrev">
    <Btn>Veckobrev</Btn>
    </Link>
    
    </div>

    <NewsPad>

    <h1> {time} {pluralCheck(time)[0]} kvar till julafton. God jul! 🎄</h1>
    </NewsPad>
    
    </>
  )

}

