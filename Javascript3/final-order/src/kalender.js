import React, { useState } from "react";
import Luckor from "./scripts/hatches";
import useDownloadUrl from "./scripts/useDownloadUrl";
import "firebase/firestore";
import styled from "styled-components";
import Btn from './assets/styled/button'
import Title from './assets/styled/title'
import ContentBox from './assets/styled/contentBox'
import staticDay from "./scripts/staticDayCount";

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
    background-image: linear-gradient(120deg,  rgba(144,0,255,0.7540603248259861), rgba(228,14,14,0.8213457076566125));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-top: 0vh;

`

const Popup = styled.div`
  display: ${(props) => props.display};
  width: 25%;
  position: absolute;

  left: 50%;
  transform: translate(-50%);

  padding-top: 12vh;
`;

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

const KalenderBox = styled(ContentBox) `
padding-top: 0vh;
`



export default function Kalender() {
  const [display, setDisplay] = useState("none");
  const [src, setSrc] = useState(24 - staticDay("dec 25, 2020 00:00:00"));

  const imageSrc = useDownloadUrl(`kalender/${src}.jpg`);

  return (
    <>
 
        <Popup display={display}>
          <div>
            <img
              src={imageSrc} 
              className="image-of-day"
            />
          </div>
          <PopBtn onClick={() => setDisplay("none")}>Ok</PopBtn>
        </Popup>


      <KalenderBox>
        <Funtitle>
          Julkalendern
        </Funtitle>
        <Title sub>
          Här kan du snabbt och enkelt kolla kalendern (limited edition)
        </Title>

        <Calendar>{Luckor()}</Calendar>
        <Btn 
          onClick={() => setDisplay("")}
        >
          Dagens lucka
        </Btn>

      </KalenderBox>
    </>
  );
}


