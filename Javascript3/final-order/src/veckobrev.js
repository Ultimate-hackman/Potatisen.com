import React, { useState, useEffect } from 'react';


import weekFinder from './scripts/week-count'

import brev from './assets/veckobrev.png'

import {downloadData} from "./scripts/news";

import fetchbrev from './scripts/fetchbrev'


function Veckobrev() {
  const [data, setData] = useState();

  useEffect(() => {
    downloadData().then(data => {
      setData(data);
    })
  }, []);



  function VeckobrevGen() {
    
    const [brev, setbrev] = useState();

    useEffect(() => {
        fetchbrev().then(setbrev);
    }, []);

    

    return brev

}

  
  return (
    <>



    <div class="veckobrev-content-box">
    <img src={brev} alt="veckobrev" class="veckobrev-img"></img>
    
    
  <a href={VeckobrevGen()} class="btn-a"> <button class="btn-veckobrev" id="week">Veckobrev vecka {weekFinder()}</button></a> 

    </div>

    <div class="news-pad">
  <h1 class="news-tag">Nyheter 📰🖊️</h1>
    {data?.map((data, index) => {
      return <li key={index} class="bullet-point">{data}</li> 
    })}

  </div>

    </>
  )

}

export default Veckobrev;
