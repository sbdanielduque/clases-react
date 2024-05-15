import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDDvgtO0pO0AKiQSXf4LSaqtFu-R_0v1i4",
    authDomain: "ecommerce-originalclothes.firebaseapp.com",
    projectId: "ecommerce-originalclothes",
    storageBucket: "ecommerce-originalclothes.appspot.com",
    messagingSenderId: "924615036499",
    appId: "1:924615036499:web:b5c9f447e14802958840a6",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
