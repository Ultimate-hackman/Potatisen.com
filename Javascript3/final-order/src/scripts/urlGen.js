
import 'firebase/database'; 
import 'firebase/storage';  


import React, { useState, useEffect} from 'react';
import fetch from './fetch'


export default function UrlGen(folder, file, filetype) {    
    const [url, setUrl] = useState();

    useEffect(() => {
        fetch(folder, file, filetype).then(setUrl);
    }, []);
    console.log(url)

    return url
}


