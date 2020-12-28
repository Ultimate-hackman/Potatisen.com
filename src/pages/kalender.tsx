import React, { Component, useState }from "react";
import Hatches from "../components/hatches"; //
import Header from '../components/header'
import stressPt from '../components/hatches'
import styled from "styled-components";
import Title from '../styles/title'
import ContentBox from '../styles/contentBox' 
import staticDay from "../lib/time/staticDayCount";
import GlobalStyle from "../theme/GlobalStyles"

import Select from 'react-select'

const uggarOption = [
  { value: '091', label: '091' },
  { value: '092', label: '092' },
  { value: '093', label: '093' }
]

const languageOption = [
  { value: 'TY', label: 'TY' },
  { value: 'FR', label: 'FR' },
  { value: 'SP-A', label: 'SP-A' },
  { value: 'SP-B', label: 'SP-B' }
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
    width: 20%;
    padding-top: 1vh;
    margin-left: 1vw ;
`
const Bar = styled.ul `
    
    display: flex;
    position: sticky;
    
`




export default function Kalender() {

  const [ugg, setUgg] = useState("091")
  const [language, setLanguage] = useState("TY")

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


      <Bar> 
      <Selection options={uggarOption} defaultValue={uggarOption[0]}  onChange={(prop) =>  setUgg(prop.value) } />
      <Selection options={languageOption} defaultValue={languageOption[0]}  onChange={(prop) =>  setLanguage(prop.value) } />
      </Bar>

        <Calendar><Hatches ugg={ugg} language={language} /></Calendar>

      </ContentBox>
    </>
  );
}