import React, { useState } from 'react';
import Luckor from './scripts/hatches'
import urlGen from './scripts/urlGen'
import "firebase/firestore"
import styled from 'styled-components'



import staticDay from './scripts/staticDayCount'


const Popup = styled.div`
    display: ${props => props.display};
    width: 50%;
    position: absolute;
    top: 2;
    bottom: 4;
    left: 1;
    right: 1;
`
const Message = styled.h1 `
text-emphasis-color: linear-gradient(red, blue);
text-align: center;
font-size: 4em;


   background: -webkit-linear-gradient(100deg, red, purple);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const Abutton = styled.button`
    
    border: none;
    color: white;

    background-image: linear-gradient(120deg,  rgba(144,0,255,0.7540603248259861), rgba(228,14,14,0.8213457076566125));

    padding: 1.5vh 1vw;
    font-size: 1.5em;
    border-radius: 10px;

    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.5vh;

    transition: ease-out 0.2s;
`

export default function Kalender() {



  let src = urlGen('kalender/', 24 - staticDay(), '.jpg')

  const [display, setDisplay] = useState("none")

  return (
    <>

    <div className="text-box">

    <Popup display={display}><Message>Dagens lucka</Message><div><img src={src} className="image-of-day"></img></div><Abutton onClick={() => setDisplay("none")}>Ok</Abutton></Popup>
    
    <h1 className="title" className="title2">Julkalendern</h1>
    <p className="main-text" >Här kan du snabbt och enkelt kolla kalendern (limited edition)</p>
    
    <div className="lucka-holder">
    {Luckor()}    
    </div>
    <button onClick={() => setDisplay("")} className="btn-hem" id="christmas">Dagens lucka</button>
    
    </div>
    
    </>
  )

}


