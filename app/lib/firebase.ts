import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdAO22ejej8YRtZM_8lPjeY_WnM7-sNR4",
  authDomain: "nike-ai-rebrand-a6733.firebaseapp.com",
  projectId: "nike-ai-rebrand-a6733",
  storageBucket: "nike-ai-rebrand-a6733.firebasestorage.app",
  messagingSenderId: "928299064147",
  appId: "1:928299064147:web:3ff6ed7515f87b5e8fdfa6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
