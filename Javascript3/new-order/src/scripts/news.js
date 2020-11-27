import firebase from "firebase"
import "firebase/firestore"

import firebaseConfig from './firebase'

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export function downloadData() {
    return new Promise((resolve, reject) => {
        let database = firebase.database();

        let ref = database.ref('bullets')
      
        ref.on('value', (data) => {
            let points = data.val();

            let keys = Object.keys(points)
            // code is destroyed made change no work forgot to unmake

            return resolve(Object.values(points).map((value) => {
                return value.bullet;
            }));
        }, err => reject(err));
    });
}