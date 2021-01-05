import React, { Component, useState }from "react";
import Hatches from "../components/calendar/hatches"; //
import Header from '../components/header'
import styled from "styled-components";
import Title from '../styles/title'
import stressPT from '../lib/kalendar/stressPT'
import GlobalStyle from "../theme/GlobalStyles"
import Select from 'react-select'
import ClassChart from '../components/calendar/classChart'
import LineChart from '../components/calendar/lineChart'

import mainTime from '../lib/time/mainTime'

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
const Popup = styled.div`
  display: ${(props) => props.display};
  
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  padding-top: 12vh;
`;

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

  const [msg, setMsg] = useState("none")


  const [ugg, setUgg] = useState("O91")
  const [language, setLanguage] = useState("TY")
  let stress = stressPT(ugg, language, 1)[1]

  function defcon(stress, base, incr) {

    const emojiArray = ['😎', '😃', '🙂', '🙁', '😟', '😡', '🤬']

    for (let i = 0; i <= emojiArray.length ; i+=1) {
      if (stress <= (incr * i) + base ) {
        return emojiArray[i]
      } else if (stress > (incr * emojiArray.length) + base) {
        return emojiArray[emojiArray.length - 1]
      }
    }

  }

  return (
    <>
    <GlobalStyle/>

    <Header title="Provschema"/>
    

        <Title top="0vh">
        Provschema 
        </Title> 
        <Title sub top="0vh">
        Här kan du snabbt kolla kommande prov ({ugg}) Chill nivå: {defcon(stress, 150, 50)} ({stress}) <small>beta* 🧪</small> 
        </Title>

        
      <Bar> 
      <Selection options={uggarOption} defaultValue={uggarOption[0]}  onChange={(prop) =>  setUgg(prop.value) } />
      <Selection options={languageOption} defaultValue={languageOption[0]}  onChange={(prop) =>  setLanguage(prop.value) } />
      </Bar>

      <Popup display={msg}>{msg} <button onClick={() => setMsg("none")}>Stäng</button></Popup>
      


        <Calendar><Hatches state={setMsg} ugg={ugg} language={language} /></Calendar>

      <ClassChart ugg={ugg} language={language}/>
      <LineChart  ugg={ugg} language={language}/>

        
      
        


    </>
  );
}