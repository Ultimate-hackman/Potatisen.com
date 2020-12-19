import React, { useState }from "react";
import Hatches from "../components/hatches"; //
import Header from '../components/header'

import styled from "styled-components";
import Title from '../styles/title'
import ContentBox from '../styles/contentBox' 
import staticDay from "../lib/time/staticDayCount";
import GlobalStyle from "../theme/GlobalStyles"




const Calendar = styled.div `
padding-top: 3vh;
display: grid;
justify-self: auto;
justify-content: center;
        
grid-template-columns: repeat(7, 11vw);
grid-template-rows: repeat(4, 6vw);
grid-row-gap: 4vh;
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


export default function Kalender() {
  const [display, setDisplay] = useState("none");
  const [src, setSrc] = useState(24 - staticDay("dec 25, 2020 00:00:00"));
  const [ugg, setUgg] = useState("093");
console.log(src)

  return (
    <>
    <GlobalStyle/>

    <Header/>


      <ContentBox>
        <Title top="0vh">
        Provschema
        </Title>
        <Title sub top="0vh">
        Här kan du snabbt kolla kommande prov {ugg}
        </Title>

      <Selection onChange={() => setUgg("092")}>
      <option value="091">091</option>
      <option>092</option>
      <option value="093">093</option>
      </Selection>

        <Calendar>{Hatches()}</Calendar>

      </ContentBox>
    </>
  );
}


