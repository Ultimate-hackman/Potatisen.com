import staticDayCount from '../lib/time/staticDayCount'
import pluralCheck from '../lib/time/pluralCheck'
import Header from '../components/header'

import GlobalStyle from "../theme/GlobalStyles"
import Title from '../styles/title'

import NewsPad from '../styles/newsPad'
import Btn from '../styles/button'
import Img from '../styles/img'

import Link from 'next/link'



export default function App() {
    let time = staticDayCount("dec 25, 2020 00:00:00")
    return (
    <>
    
    <GlobalStyle/>
    <Header />

    <Title>Välkommen till Potatisen.com!</Title>
    <Title sub>Här kan du snabbt och enkelt kolla veckobrevet utan något strul</Title>

    <Img src="https://media.discordapp.net/attachments/688322560957743190/786279776468992071/shrek.png"></Img>
    <Link href="/veckobrev">
    <Btn>Veckobrev</Btn>
    </Link>

    <NewsPad>
        <h1> {time} {pluralCheck(time, 0, 0, 0)[0]} kvar till julafton. God jul! 🎄</h1>
    </NewsPad>
        
        
    </>    
    )
}