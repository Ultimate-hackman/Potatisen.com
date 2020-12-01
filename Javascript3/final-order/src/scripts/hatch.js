import firebase from "firebase"
import 'firebase/database'; 

export function downloadData() {
    return new Promise((resolve, reject) => {
        let database = firebase.database();

        let ref = database.ref('bullets')
      
        ref.on('value', (data) => {
            let points = data.val();           

            return resolve(Object.values(points).map((value) => {
                return value.bullet;
            }));
        }, err => reject(err));
    });
}