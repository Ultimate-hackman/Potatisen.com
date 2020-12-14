import Head from 'next/head'
import styled from "styled-components";

import Header from '../components/header'

import Title from '../styles/title'
import Img from '../styles/img'
import Btn from '../styles/button'
import GlobalStyle from '../theme/GlobalStyles'
import Link from 'next/link'

export default function Home() {
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
    </>
  )
}
