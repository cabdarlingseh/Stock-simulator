import firebase from "firebase/compat/app";
import { db } from "../firebase";
import { doc, setDoc, updateDoc } from 'firebase/firestore';


//Stock Price

export const updatePortfolio = async (userId, stockSymbol, shares, price) => {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
        [`portfolio.${stockSymbol}`]: { shares, avgPrice: price },
        balance: firebase.firestore.FieldValue.increment(-shares * price),
    });
};

// Watchlist

export const addToWatchList = async (userId, stockSymbol) => {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
        watchlist: firebase.firestore.FieldValue.arrayUnion(stockSymbol),
    });
};


export const initializeUser = async (userId) => {
    const userRef = doc(db, 'users', userId);
    await setDoc(userRef, {
        portfolio: {},
        watchlist: {},
        balance: 10000
    },
        { merge: true }
    );
};