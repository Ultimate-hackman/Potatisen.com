import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjcpVzSU2TLKdasOLYJv1LyHoiQb6v-kw",
  authDomain: "potatisen-704fb.firebaseapp.com",
  databaseURL: "https://potatisen-704fb.firebaseio.com",
  projectId: "potatisen-704fb",
  storageBucket: "potatisen-704fb.appspot.com",
  messagingSenderId: "1021245489304",
  appId: "1:1021245489304:web:f7f23e9092c9be63f710ed",
  measurementId: "G-9JPRYYJRND",
};

if (firebase.apps.length <= 0) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
