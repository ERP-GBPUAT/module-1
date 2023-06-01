import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

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
export const storage = getStorage(app);
