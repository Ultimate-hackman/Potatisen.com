import React, { useState, useEffect } from 'react';
import weekFinder from './scripts/week-count'
import brev from './assets/veckobrev.png'
  

import 'firebase/database'; 
import firebaseConfig from './scripts/firebase'
import useDownloadUrl from './scripts/useDownloadUrl'

import styled from "styled-components";
import Btn from './assets/styled/button'
import NewsPad from './assets/styled/newsPad'

import firebase from "firebase"


const BtnVeckobrev = styled(Btn)`
    background-color: rgb(255, 255, 255); /* Black */
    color: black;
    border: none;

    font-size: 3em;
    border-radius: 10px;
    
    width: 100%;
    border: 1px solid rgb(0, 0, 0);
    padding: 2vh;

    transition: linear 0.2s;

    &:hover{
      background-image: linear-gradient(120deg,  rgba(144,0,255,0.7540603248259861), rgba(228,14,14,0.8213457076566125));
      color:white;
    }
    
    
`
export default function Veckobrev() {
  const database = firebase.firestore();
  let array = new Array()
  const [data, setData] = useState();

  useEffect(() => {
    database.collection('news').get().then((snapshot) =>{
      snapshot.docs.forEach(doc => {
        
          array.push(doc.data().name)

      })
    
  setData(array)
  })
  }, []);

  

  

  const url = useDownloadUrl(`veckobrev/${weekFinder(4, 18) + 1}.pdf`);

  return (
    <>

    <div className="veckobrev-content-box">
    <img src={brev} alt="veckobrev" className="veckobrev-img"></img>
    
    
    <a href={url} ><BtnVeckobrev  id="week">Veckobrev vecka {weekFinder(4, 18) + 1}</BtnVeckobrev></a> 

    </div>

    <NewsPad>
  <h1>Nyheter 📰🖊️</h1>
  
  {data?.map((data, index) =>{
    return <li key={index} className="bullet-point">{data}</li> 
  })}
  
  </NewsPad>

    </>
  )

}

