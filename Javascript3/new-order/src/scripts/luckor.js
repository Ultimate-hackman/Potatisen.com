import React, {Component, useState, useEffect} from 'react';



function Luckor() {
    let array = []

    for(let i=1; i<25; i+=1) {
        array.push(<div class="lucka"><h1 class="luck-text">Dag {i}</h1></div>)
    }
    

    return array
}

export default Luckor