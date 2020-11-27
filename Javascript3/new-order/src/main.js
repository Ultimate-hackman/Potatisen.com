import React, { useState } from 'react';




import shrek from './assets/main.png';



function App() {



  return (
    <>


    <div class="text-box">

    <h1 class="title">Välkommen till Potatisen.com!</h1>
    <p class="main-text" >Här kan du snabbt och enkelt kolla veckobrevet utan något strul</p>

    <img src={shrek}  alt="img" class="main-img"></img>
    <button class="btn-hem"><a href="/veckobrev" class="btn-text">Veckobrev</a></button>

    </div>

    </>
  )

}

export default App;
