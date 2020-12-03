import React, { useState, useEffect } from 'react';
import weekFinder from './scripts/week-count'
import brev from './assets/veckobrev.png'
import {downloadData} from "./scripts/news";
import UrlGen from './scripts/urlGen'

export default function Veckobrev() {
  const [data, setData] = useState();

  useEffect(() => {
    downloadData().then(data => {
      setData(data);
    })
  }, []);

  let url = UrlGen('veckobrev/', weekFinder() + 1, '.pdf')

  return (
    <>

    <div className="veckobrev-content-box">
    <img src={brev} alt="veckobrev" className="veckobrev-img"></img>
    
    
  <a href={url} className="btn-a"> <button className="btn-veckobrev" id="week">Veckobrev vecka {weekFinder() + 1}</button></a> 

    </div>

    <div className="news-pad">
  <h1 className="news-tag">Nyheter 📰🖊️</h1>
    {data?.map((data, index) => {
      return <li key={index} className="bullet-point">{data}</li> 
    })}

  </div>

    </>
  )

}

