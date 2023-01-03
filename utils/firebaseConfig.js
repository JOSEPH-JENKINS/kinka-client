import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDKOr40iR0kBgEkszBPHnmgFfJluOsEkjM",
  authDomain: "kinka-db.firebaseapp.com",
  projectId: "kinka-db",
  databaseURL: "https://kinka-db-default-rtdb.firebaseio.com",
  storageBucket: "kinka-db.appspot.com",
  messagingSenderId: "1030150489386",
  appId: "1:1030150489386:web:481fb05cfd1f3ffaf54a53",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
