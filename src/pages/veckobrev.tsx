
import weekFinder from '../lib/time/weekCount'
import React, { useState, useEffect } from 'react';
import firebase from '../lib/firebase/firebase'
import useDownloadUrl from '../lib/firebase/useDownloadUrl'

import styled  from "styled-components"; 

import GlobalStyle from '../theme/GlobalStyles'

import Header from '../components/header'
import NewsPad from '../styles/newsPad'
import Img from '../styles/img'
import BigBtn from '../styles/bigBtn'


const VeckoImg = styled(Img) `
width: 25%;
padding-top: 15vh;
`


const Bullet = styled.li `
list-style-type:none;
`

export default function veckobrev() {
    const database = firebase.firestore();
    let array = new Array()
    const [data, setData] = useState(undefined);

  
    useEffect(() => {
      database.collection('news').get().then((snapshot) =>{
        snapshot.docs.forEach(doc => {
            array.push(doc.data().name)
        })
      
    setData(array)
    })
    }, []);

    const url = useDownloadUrl(`veckobrev/${weekFinder(4, 17) + 1}.pdf`);

    let weekMsg = new String()
    if (url == undefined) {
        
        weekMsg += "Veckobrevet hittades inte"
    } else {
        weekMsg += "Veckobrev vecka " + (weekFinder(4, 17) + 1)
    }


    return (
        <>

        <GlobalStyle/>
        <Header title="Veckobrev"/>
        <VeckoImg src="https://cdn.discordapp.com/attachments/688322560957743190/786315067352154172/veckobrev.edcc5d03.png"></VeckoImg>
        <a href={url} > <BigBtn>{weekMsg}</BigBtn> </a>


        <NewsPad>
        <h1>Nyheter 📰🖊️</h1>  
        {data?.map((data, index) =>{
         return <Bullet key={index} className="bullet-point">{data}</Bullet> 
      })}
  </NewsPad>
        </>
    )
}