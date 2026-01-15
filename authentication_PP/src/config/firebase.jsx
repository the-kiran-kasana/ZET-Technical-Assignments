import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAdhZapQHWZJJZR6dBta5H5D0pePndBAak",
  authDomain: "zet-app-a416b.firebaseapp.com",
  projectId: "zet-app-a416b",
  storageBucket: "zet-app-a416b.firebasestorage.app",
  messagingSenderId: "100784193992",
  appId: "1:100784193992:web:42d1f5db928d9d487d40fd",
  measurementId: "G-9GX1Y3W1GV"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);