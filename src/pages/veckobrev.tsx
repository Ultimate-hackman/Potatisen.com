import staticDayCount from '../lib/time/staticDayCount'
import weekFinder from '../lib/time/weekCount'

import styled  from "styled-components"; 

import GlobalStyle from '../theme/GlobalStyles'
import Link from 'next/link'
import Header from '../components/header'

import NewsPad from '../styles/newsPad'
import Title from '../styles/title'
import Img from '../styles/img'
import Btn from '../styles/button'

const VeckoImg = styled(Img) `
width: 25%;
padding-top: 15vh;
`

const BtnVeckobrev = styled(Btn)`
    background-color: rgb(255, 255, 255); /* Black */
    color: black;
    border: none;

    font-size: 2.5em;
    border-radius: 10px;
    
    width: 40%;
    border: 1px solid rgb(0, 0, 0);
    padding: 2vh;

    transition: linear 0.2s;

    &:hover{
      background-image: linear-gradient(120deg,  rgba(144,0,255,0.7540603248259861), rgba(228,14,14,0.8213457076566125));
      color:white;
    }
    
    
`

export default function veckobrev() {
    return (
        <>
        <GlobalStyle/>
        <Header/>
        <VeckoImg src="https://cdn.discordapp.com/attachments/688322560957743190/786315067352154172/veckobrev.edcc5d03.png"></VeckoImg>
        <a href={"poo"} > <BtnVeckobrev>Veckobrev vecka {weekFinder(4, 18) + 1}</BtnVeckobrev> </a>
        </>
    )
}