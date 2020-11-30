import firebase from "firebase"
import "firebase/firestore"



import countUp from './countup'



export default function fetch(x) {
    
    return new Promise((resolve) => {
    const storage = firebase.storage();

    

  
    let day = 24 - countUp()

    console.log(countUp())
   
    console.log('kalender/' + day + '.jpg')
     storage.ref('kalender/' + day + '.jpg').getDownloadURL().then((url) => {
     
     
    resolve(url);
     
    });
  });
}
