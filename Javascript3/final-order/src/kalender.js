import React from 'react';
import ReactDoom from "react-dom"




import Luckor from './scripts/luckor'

import firebase from "firebase"
import "firebase/firestore"

import firebaseConfig from './scripts/firebase'



function Kalender() {

  

  return (
    <>


    <div class="text-box">

    <h1 class="title">Julkalendern</h1>
    <p class="main-text" >Här kan du snabbt och enkelt kolla dagens lucka (limited edition)</p>
    <div class="lucka-holder">
        {Luckor()}
    </div>

    

    

    </div>

  
    

    </>
  )

}

export default Kalender;
