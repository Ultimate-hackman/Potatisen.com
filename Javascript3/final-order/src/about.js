import React, { Component, useState } from 'react';


import brev from './assets/om-oss.png'


import countDown from './scripts/countdown'



function About() {

  
  
  return (
    
    <>
    
    


    
    
    <div class="text-box2">
    <div class="img-move-om-oss"><img src={brev} class="om-oss-img"></img></div>
  <p class="om-oss-txt">  Potatisen.com grundades i september 2020 av mig, David H, med målet att göra saker som <a href="https://xn--sdermalmsskolan-8sb.com/">Södermalmsskolan.com </a> inte vågar eller vill göra som endå är användbart. Det enda nuvarande exemplet av detta är att jag delar veckobrevet till alla, vilket inte södermalmsskolan.com vill göra pågrund av sekretesskäl. Ingen reklam sedan 2020. {countDown()} </p>
  <button class="btn-hem"><a href="/" class="btn-text">Hem</a></button> 

    </div>

    
    </>
  )

}

export default About;
