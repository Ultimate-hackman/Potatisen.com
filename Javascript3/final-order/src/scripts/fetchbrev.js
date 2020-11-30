import firebase from "firebase"
import "firebase/firestore"

import weekFinder from './week-count'




export default function fetchBrev() {
    
    return new Promise((resolve) => {
    const storage = firebase.storage();


    let date = weekFinder()
   
    console.log('veckobrev/' + date + '.pdf')
     storage.ref('veckobrev/' + date + '.pdf').getDownloadURL().then((url) => {
     
     
    resolve(url);
     
    });
  });
}
