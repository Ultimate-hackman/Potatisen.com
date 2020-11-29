import fetch from './fetch'

import firebase from "firebase"
import "firebase/firestore"

import firebaseConfig from './firebase'

import React, {Component, useState, useEffect} from 'react';


function ImageGen(x) {
    
    const [url, setUrl] = useState();

    useEffect(() => {
        fetch(x).then(setUrl);
    }, []);

    console.log(url)

    return url

}


export default ImageGen;