import Head from 'next/head'
import styled from "styled-components";

import staticDayCount from '../lib/time/staticDayCount'
import pluralCheck from '../lib/time/pluralCheck'

import GlobalStyle from '../theme/GlobalStyles'
import Link from 'next/link'
import Header from '../components/header'

import NewsPad from '../styles/newsPad'
import Title from '../styles/title'
import Img from '../styles/img'
import Btn from '../styles/button'


export default function Home() {
  let time = staticDayCount("dec 25, 2020 00:00:00")
  return (
    <>

        <GlobalStyle/>
        <Header/>
        <Title>
        Välkommen till Potatisen.com!
        </Title>
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
