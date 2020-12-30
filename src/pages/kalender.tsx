import React, { Component, useState }from "react";
import Hatches from "../components/hatches"; //
import Header from '../components/header'
import styled from "styled-components";
import Title from '../styles/title'
import stressPT from '../lib/kalendar/stressPT'
import GlobalStyle from "../theme/GlobalStyles"
import Select from 'react-select'
import ChartGen from '../components/chart'

import NewsPad from '../styles/newsPad'

const uggarOption = [
  { value: 'O91', label: 'O91' },
  { value: 'O92', label: 'O92' },
  { value: 'O93', label: 'O93' }
]

const languageOption = [
  { value: 'TY', label: 'Tyska' },
  { value: 'FR', label: 'Franska' },
  { value: 'SP-A', label: 'Spanska (AAV)' },
  { value: 'SP-B', label: 'Spanska (CTH)' }
]
const Calendar = styled.div `
padding-top: 3vh;
display: grid;
justify-self: auto;
justify-content: center;
        
grid-template-columns: repeat(7, 9vw);
grid-template-rows: repeat(4, 5vw);
grid-row-gap: 2vw;



@media only screen and (max-height: 768px) {
  grid-template-columns: repeat(7, 11vw);
     grid-template-rows: repeat(4, 7vw);  
    }
`
const Box = styled.div `
width: 40vw;
display: grid;
grid-template-columns: repeat(2, 50vw);
grid-template-rows: repeat(2, 5vw);

`
const Selection = styled(Select) `
    position: relative;
    width: 10vw;

    margin-left: 1vw ;

    @media only screen and (max-height: 768px) {
      width: 15vw;
    }
`
const Bar = styled.ul `
    padding-top: 1vh;
    display: flex;
    padding-left: 20vw;

    @media only screen and (max-height: 768px) {
      padding-left: 15vw;
    }
    
`



export default function Kalender() {

  const [ugg, setUgg] = useState("O91")
  const [language, setLanguage] = useState("TY")
  let stress =stressPT(ugg, language)
  function defcon(stress) {
    let emoji = ""
    if (stress <= 100) { emoji += "😎" } 
    if (stress <= 200 && stress >= 150) { emoji += "😃" } 
    if (stress <= 250 && stress >= 300) { emoji += "🙂" }
    if (stress <= 350 && stress >= 400) { emoji += "🙁" } 
    if (stress <= 450 && stress >= 400) { emoji += "😟" }
    if (stress <= 500 && stress >= 550) { emoji += "💢" }
    if (stress >= 550) { emoji += "🤬" }    
    return emoji
  }

  return (
    <>
    <GlobalStyle/>

    <Header title="Provschema"/>
    

        <Title top="0vh">
        Provschema 
        </Title>
        <Title sub top="0vh">
        Här kan du snabbt kolla kommande prov ({ugg}) Chill nivå: {defcon(stress)} STP: {stress}
        </Title>

        
      <Bar> 
      <Selection options={uggarOption} defaultValue={uggarOption[0]}  onChange={(prop) =>  setUgg(prop.value) } />
      <Selection options={languageOption} defaultValue={languageOption[0]}  onChange={(prop) =>  setLanguage(prop.value) } />
      </Bar>

      
        <Calendar><Hatches ugg={ugg} language={language} /></Calendar>

        <ChartGen ugg={ugg} language={language}/>

        
      
        


    </>
  );
}