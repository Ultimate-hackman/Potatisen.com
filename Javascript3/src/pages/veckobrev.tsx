import staticDayCount from '../lib/time/staticDayCount'
import weekFinder from '../lib/time/weekCount'
import useDownloadUrl from '../lib/firebase/useDowloadUrl'

import GlobalStyle from "../theme/GlobalStyles"
import styled from "styled-components";

import Header from '../components/header'
import NewsPad from '../styles/newsPad'
import Btn from '../styles/button'
import Img from '../styles/img'

import firebase from '../lib/firebase/firebase'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';


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
const Bullet = styled.li `
list-style-type:none;
`



export default function veckobrev() {

  const database = firebase.firestore();
  let array: any = new Array()
  const [data, setData] = useState(undefined);

  useEffect(() => {
    database.collection('news').get().then((snapshot) =>{
      snapshot.docs.forEach(doc => {
          array.push(doc.data().name)

      })
    
  setData(array)
  })
  }, []);

    const url = useDownloadUrl(`veckobrev/${weekFinder(4, 18) + 1}.pdf`);
    const time = staticDayCount("dec 25, 2020 00:00:00")
    return (
    <>
    
    <GlobalStyle/>
    <Header />

    <VeckoImg src="https://cdn.discordapp.com/attachments/688322560957743190/786315067352154172/veckobrev.edcc5d03.png"></VeckoImg>
    <a href={url} > <BtnVeckobrev>Veckobrev vecka {weekFinder(4, 18) + 1}</BtnVeckobrev> </a>

    <NewsPad>
    <h1>Nyheter 📰🖊️</h1>  
    {data?.map((data, index) =>{
    return <Bullet key={index} className="bullet-point">{data}</Bullet> 
  })}
  </NewsPad>
        
        
    </>    
    )
}