
import React, { useState, useEffect } from 'react';

import fetch from './scripts/fetch'

import Luckor from './scripts/luckor'


import "firebase/firestore"


import styled from 'styled-components'

import countUp from './scripts/countup'


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

function Kalender() {

  function ImageGen(x) {
    
    const [url, setUrl] = useState();

    useEffect(() => {
        fetch(x).then(setUrl);
    }, []);

    console.log(url)

    return url

}

  let day = 24 - countUp()

  let src = ImageGen(day)

  

  const [display, setDisplay] = useState("none")

  return (
    <>

    <div class="text-box">

    <Popup display={display}><Message><h1>Dagens lucka</h1></Message><div><img src={src} class="image-of-day"></img></div> <Abutton onClick={() => setDisplay("none")}>Ok</Abutton> </Popup>
    
    <h1 class="title" class="title2">Julkalendern</h1>
    <p class="main-text" >Här kan du snabbt och enkelt kolla kalendern (limited edition)</p>
    
    <div class="lucka-holder">
    {Luckor()}    
    </div>
    <button onClick={() => setDisplay("")} class="btn-hem" id="christmas">Dagens lucka</button>
    
    </div>
    
    </>
  )

}

export default Kalender;
