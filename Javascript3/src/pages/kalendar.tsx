import React, { useState } from "react";
import Hatches from "../components/hatches";
import useDownloadUrl from "../lib/firebase/useDowloadUrl";
import firebase from '../lib/firebase/firebase'
import Header from '../components/header'

import styled from "styled-components";
import Btn from '../styles/button'
import Title from '../styles/title'
import ContentBox from '../styles/contentBox'
import staticDay from "../lib/time/staticDayCount";
import GlobalStyle from "../theme/GlobalStyles"

import img from '../styles/img'

const Calendar = styled.div `
padding-top: 5vh;
display: grid;
justify-self: auto;
justify-content: center;
        
grid-template-columns: repeat(7, 11vw);
grid-template-rows: repeat(4, 6vw);
grid-row-gap: 4vh;
`

const Funtitle = styled(Title) `
    padding-top: 0vh;
    background-image: linear-gradient(120deg,  rgba(144,0,255,0.7540603248259861), rgba(228,14,14,0.8213457076566125));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

`

const Popup = styled.div`
  display: ${(props) => props.display};
  width: 25%;
  position: absolute;

  left: 50%;
  transform: translate(-50%);

  padding-top: 12vh;
`;

const ImgToday = styled(img) `
border-radius: 20px;
width: 100%;
box-shadow: 1px 1px 8px 6px rgba(58, 58, 58, 0.062);

`

const PopBtn = styled(Btn)`
  border: none;

  background-image: linear-gradient(
    120deg,
    rgba(144, 0, 255, 0.7540603248259861),
    rgba(228, 14, 14, 0.8213457076566125)
  );

  margin-top: 1.5vh;

  transition: ease-out 0.2s;
`;



export default function Kalender() {
  const [display, setDisplay] = useState("none");
  const [src, setSrc] = useState(24 - staticDay("dec 25, 2020 00:00:00"));

  const imageSrc = useDownloadUrl(`kalender/${src}.jpg`);

  return (
    <>
    <GlobalStyle/>

    <Header/>
 
        <Popup display={display}>
          <div>
            <ImgToday
              src={imageSrc} 
              className="image-of-day"
            />
          </div>
          <PopBtn onClick={() => setDisplay("none")}>Ok</PopBtn>
        </Popup>


      <ContentBox>
        <Funtitle>
          Julkalendern
        </Funtitle>
        <Title sub>
          Här kan du snabbt och enkelt kolla kalendern (limited edition)
        </Title>

        <Calendar>{Hatches()}</Calendar>
        <Btn 
          onClick={() => setDisplay("")}
        >
          Dagens lucka
        </Btn>

      </ContentBox>
    </>
  );
}


