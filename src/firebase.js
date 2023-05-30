// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6aX7HCI0U6J6ABUW9oICi4kQVOM1aFjY",
  authDomain: "faculty-leave-650cd.firebaseapp.com",
  projectId: "faculty-leave-650cd",
  storageBucket: "faculty-leave-650cd.appspot.com",
  messagingSenderId: "586133958241",
  appId: "1:586133958241:web:84649778de88f178c64420",
  measurementId: "G-CMG9PLM30M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const collectionRef = collection(db, "users");

export default app;
