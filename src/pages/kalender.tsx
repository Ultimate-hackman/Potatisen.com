import React, { Component, useState }from "react";
import Hatches from "../components/hatches"; //
import Header from '../components/header'

import styled from "styled-components";
import Title from '../styles/title'
import ContentBox from '../styles/contentBox' 
import stressPT from '../lib/kalendar/stressPT'
import GlobalStyle from "../theme/GlobalStyles"
import weekCount from '../lib/time/weekCount'
import Select from 'react-select'

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

const Selection = styled(Select) `
    position: relative;
    width: 10%;
    margin-left: 1vw ;
`
const Bar = styled.ul `
    padding-top: 1vh;
    display: flex;
    padding-left: 20vw;
    
`




export default function Kalender() {

  const [ugg, setUgg] = useState("O91")
  const [language, setLanguage] = useState("TY")
  let stress =stressPT(ugg, language)
  function defcon(stress) {
    let emoji = ""
    if (stress < 200) { emoji += "😎" } 
    if (stress < 400 && stress > 200) { emoji += "😃" } 
    if (stress < 600 && stress > 400) { emoji += "🙂" }
    if (stress < 800 && stress > 600) { emoji += "🙁" } 
    if (stress < 1000 && stress > 800) { emoji += "😟" }
    if (stress < 1200 && stress > 1000) { emoji += "💢" }
    if (stress > 1200) { emoji += "🤬" }    
    return emoji
  }

  return (
    <>
    <GlobalStyle/>

    <Header title="Provschema"/>


      <ContentBox>
        <Title top="0vh">
        Provschema 
        </Title>
        <Title sub top="0vh">
        Här kan du snabbt kolla kommande prov ({ugg}) stress nivå: {defcon(stress)} STP: {stress}
        </Title>


      <Bar> 
      <Selection options={uggarOption} defaultValue={uggarOption[0]}  onChange={(prop) =>  setUgg(prop.value) } />
      <Selection options={languageOption} defaultValue={languageOption[0]}  onChange={(prop) =>  setLanguage(prop.value) } />
      </Bar>


        <Calendar><Hatches ugg={ugg} language={language} /></Calendar>

      </ContentBox>
    </>
  );
}