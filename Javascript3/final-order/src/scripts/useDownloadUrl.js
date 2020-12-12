<<<<<<< Updated upstream:Javascript3/final-order/src/scripts/useDownloadUrl.js
import firebase from "firebase"
import 'firebase/database'; 
import 'firebase/storage';  
=======
import firebase from "./firebase"
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
>>>>>>> Stashed changes:Javascript3/src/lib/firebase/useDowloadUrl.ts

import React, { useState, useEffect} from 'react';


export default function useDownloadUrl(path) { 
    const [url, setUrl] = useState();
    const storage = firebase.storage();
    
    useEffect(() => {
        storage.ref(path).getDownloadURL().then(setUrl);
    }, [path]) 
    
    return url
}

