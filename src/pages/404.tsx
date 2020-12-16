import Head from 'next/head'
import styled from "styled-components";


import GlobalStyle from '../theme/GlobalStyles'
import Link from 'next/link'
import Header from '../components/header'

import NewsPad from '../styles/newsPad'
import Title from '../styles/title'
import Img from '../styles/img'
import Btn from '../styles/button'


const Question = styled(Img) `
width: 15%;
`

export default function Home() {

  return (
    <>

        <GlobalStyle/>
        <Header/>
        <Title>
        404 
        </Title>
        <Title sub>
        Sidan gick inte att hitta 
        </Title>
        <Question src="https://cdn.discordapp.com/attachments/688322560957743190/788822693277335552/question.png"></Question>

        <Link href="/">
        <Btn>Hem</Btn>
       </Link>

       <NewsPad>
        <h1>Sidan gick inte att hitta </h1>
       </NewsPad>
    </>
  )
}
