import React, { useState } from 'react';


import countUp from './scripts/countup'

import shrek from './assets/main.png';

import Luckor from './scripts/luckor'

for (let i=0; i <24; i+=1) {
    console.log("asd")
}

function Kalender() {



  return (
    <>


    <div class="text-box">

    <h1 class="title">Jul kalendern</h1>
    <p class="main-text" >Här kan du snabbt och enkelt kolla dagens lucka</p>
    <div class="lucka-holder">
        {Luckor()}
    </div>

    

    </div>
    

    </>
  )

}

export default Kalender;
