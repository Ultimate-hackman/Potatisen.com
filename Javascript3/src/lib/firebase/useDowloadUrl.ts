import firebase from "./firebase"

import React, { useState, useEffect} from 'react';


export default function useDownloadUrl(path) { 
    const [url, setUrl] = useState();
    const storage = firebase.storage();
    
    useEffect(() => {
        storage.ref(path).getDownloadURL().then(setUrl);
    }, [path]) 
    
    return url
}

