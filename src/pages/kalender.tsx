import React, { Component, useState }from "react";
import Hatches from "../components/hatches"; //
import Header from '../components/header'
import stressPt from '../components/hatches'
import styled from "styled-components";
import Title from '../styles/title'
import ContentBox from '../styles/contentBox' 
import staticDay from "../lib/time/staticDayCount";
import GlobalStyle from "../theme/GlobalStyles"
import Btn from "../styles/btn"

import Select from 'react-select'

const options = [
  { value: '091', label: '091' },
  { value: '092', label: '092' },
  { value: '093', label: '093' }
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

    width: 20%;
    padding-top: 1vh;
`





export default function Kalender() {
  const [display, setDisplay] = useState("none");
  const [ugg, setUgg] = useState("091")
  const [language, setLanguage] = useState("sp")



  return (
    <>
    <GlobalStyle/>

    <Header/>


      <ContentBox>
        <Title top="0vh">
        Provschema 
        </Title>
        <Title sub top="0vh">
        Här kan du snabbt kolla kommande prov ({ugg}) 
        </Title>


      <Selection options={options} defaultValue={options[0]}  onChange={(prop) =>  setUgg(prop.value) } />



        <Calendar><Hatches ugg={ugg} /></Calendar>

      </ContentBox>
    </>
  );
}