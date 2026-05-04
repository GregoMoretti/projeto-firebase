import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXvAQQEHCUKuoq5wR_hiwxf-wNdLlKgag",
  authDomain: "fir-1a41e.firebaseapp.com",
  projectId: "fir-1a41e",
  storageBucket: "fir-1a41e.appspot.com",
  messagingSenderId: "169659050121",
  appId: "1:169659050121:web:1e4f63e2ddde06bf6f7e58"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);