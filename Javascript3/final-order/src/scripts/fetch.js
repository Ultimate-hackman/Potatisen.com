import firebase from "firebase"
import "firebase/firestore"

import firebaseConfig from './firebase'



export default function fetch(x) {
    
    return new Promise((resolve) => {
    const storage = firebase.storage();
   
    console.log('kalender/' + x + '.jpg')
     storage.ref('kalender/' + x + '.jpg').getDownloadURL().then((url) => {
     
     
    resolve(url);
     
    });
  });
}
    
//just want the url
// why you run fetch from inside fetch
// i don know
// first problem: fetch is a js function already existing for downloading documents. rename function.
//i no it wrong chil

