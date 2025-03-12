import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCW23naXZXTC3w1qMW5m0akyynYHuFV4Fc",
    authDomain: "stock-simulator-a0ca9.firebaseapp.com",
    projectId: "stock-simulator-a0ca9",
    storageBucket: "stock-simulator-a0ca9.firebasestorage.app",
    messagingSenderId: "72861533932",
    appId: "1:72861533932:web:5258e1b9a0f489dca247c9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };