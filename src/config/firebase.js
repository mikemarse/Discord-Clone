import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPbUKkaSiwESSIQ3h23-j7puY8PCBS8gs",
  authDomain: "discord-clone-50cc7.firebaseapp.com",
  projectId: "discord-clone-50cc7",
  storageBucket: "discord-clone-50cc7.appspot.com",
  messagingSenderId: "253956966387",
  appId: "1:253956966387:web:52d5470fd9a44b5accf486",
  measurementId: "G-E249DZQTBV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
