import firebase from "firebase"
import 'firebase/database'; 


export default function fetch(folder, file, filetype) {
    
    return new Promise((resolve) => {
    const storage = firebase.storage();
   
    console.log(folder + file + filetype)
    storage.ref(folder + file + filetype).getDownloadURL().then((url) => {

    resolve(url);
     
    });
  });
}
