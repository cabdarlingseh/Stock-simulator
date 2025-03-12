import { db } from "../firebase";
import { doc, updateDoc, setDoc, increment, arrayUnion } from 'firebase/firestore';


//Stock Price

export const updatePortfolio = async (userId, stockSymbol, shares, price) => {

    try {
        const userRef = doc(db, 'users', userId);
        await updateDoc(userRef, {
            [`portfolio.${stockSymbol}`]: { shares, avgPrice: price },
            balance: increment(-shares * price),
        });
    }
    catch (error) {
        console.error("Error updating portfolio:", error);
    }
};

// Watchlist

export const addToWatchList = async (userId, stockSymbol) => {
    try {
        const userRef = doc(db, 'users', userId);
        await updateDoc(userRef, {
            watchlist: arrayUnion(stockSymbol),
        });
    }
    catch (error) {
        console.error("Error updating portfolio:", error);
    }
};


export const initializeUser = async (userId) => {
    try {
        const userRef = doc(db, 'users', userId);
        await setDoc(
            userRef,
            {
                portfolio: {},
                watchlist: {},
                balance: 10000
            },

            { merge: true }
        );
    }
    catch (error) {
        console.error("Error initializing user:", error);
    }
};