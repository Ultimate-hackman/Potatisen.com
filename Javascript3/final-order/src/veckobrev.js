import React, { useState, useEffect } from 'react';

import pdf from './assets/brev.pdf'

import weekFinder from './scripts/week-count'

import brev from './assets/veckobrev.png'

import {downloadData} from "./scripts/news";

function Veckobrev() {
  const [data, setData] = useState();

  useEffect(() => {
    downloadData().then(data => {
      setData(data);
    })
  }, []);

  return (
    <>



    <div class="veckobrev-content-box">
    <img src={brev} alt="veckobrev" class="veckobrev-img"></img>
    
    
  <a href={pdf} class="btn-a"> <button class="btn-veckobrev" id="week">{weekFinder()}</button></a> 


    
    </div>

    <div class="news-pad">
  <h1 class="news-tag">Nyheter 📰🖊️</h1>
    {data?.map((data, index) => {
      return  <li key={index} class="bullet-point">{data}</li> 
    })}

  </div>

    </>
  )

}

export default Veckobrev;
