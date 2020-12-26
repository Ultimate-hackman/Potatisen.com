
import React, { Component, useState }from "react";
import Hatches from "../components/hatches"; //
import Header from '../components/header'
import countDown from '../lib/time/countDown'
import stressPt from '../components/hatches'
import styled from "styled-components";
import Title from '../styles/title'
import ContentBox from '../styles/contentBox' 
import staticDay from "../lib/time/staticDayCount";
import GlobalStyle from "../theme/GlobalStyles"
import Btn from "../styles/button"



const Calendar = styled.div `
padding-top: 3vh;
display: grid;
justify-self: auto;
justify-content: center;
        
grid-template-columns: repeat(7, 11vw);
grid-template-rows: repeat(4, 6vw);
grid-row-gap: 3vh;
`

const Selection = styled.select `
    border-radius: 5px;
    width: 10vw;
    margin-top: 2vh;
    box-shadow: 1px 1px 8px 1px rgba(58, 58, 58, 0.096);
    transition: ease-out 0.2s;
  &:hover {
	border-color: #388cd1;
}
`


const Greet = (props)=> {
  return <h1>{props.ugg}</h1>
}



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
          <Greet ugg={ugg}/>
        Här kan du snabbt kolla kommande prov 
        </Title>

      <button onClick={() => setUgg("091")}>091</button>
      <button onClick={() => setUgg("092")}>092</button>
      <button onClick={() => setUgg("093")}>093</button>



        <Calendar><Hatches ugg={ugg} /></Calendar>

      </ContentBox>
    </>
  );
}