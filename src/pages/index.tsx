
import staticDayCount from '../lib/time/staticDayCount'
import pluralCheck from '../lib/time/pluralCheck'

import GlobalStyle from '../theme/GlobalStyles'
import Link from 'next/link'
import Header from '../components/header'

import NewsPad from '../styles/newsPad'
import Title from '../styles/title'
import Img from '../styles/img'
import Btn from '../styles/btn'



export default function Home() {
  let time = staticDayCount("dec 25, 2020 00:00:00")
  let time2 = staticDayCount("jan 11, 2020 00:00:00")


  function christmas() {
    if (time === 0) {
      return  "Idag är det julafton"
    } else if (time < 0) {
      return  365 + time2 + " dagar kvar till skolstart."
    } else {
      return time + " " + pluralCheck(time, 0, 0, 0)[0] + " " + "kvar till julafton."
    }
  }
  
  return (
    <>

        <GlobalStyle/>
        <Header/>
        <Title>
        Välkommen till Potatisen.com!
        </Title>
        <Img src="https://cdn.discordapp.com/attachments/688322560957743190/791456984146771988/shrek_chris.png"></Img>

        <Link href="/veckobrev">
        <Btn>Veckobrev</Btn>
       </Link>

       <NewsPad>
        <h1> {christmas()} God jul! 🎄</h1>
       </NewsPad>
    </>
  )
}
