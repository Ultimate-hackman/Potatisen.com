

import "firebase/firestore"

import React, { useState, useEffect} from 'react';



function ImageGen(x) {
    
    const [url, setUrl] = useState();

    useEffect(() => {
        fetch(x).then(setUrl);
    }, []);

    console.log(url)

    return url

}



export default ImageGen;