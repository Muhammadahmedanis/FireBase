import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendEmailVerification,  RecaptchaVerifier, signInWithPhoneNumber} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyDSH5TdMEqmLuS17VzjIlkXU8Xn5MFAyDQ",
    authDomain: "e-commerce-ui-fcf2c.firebaseapp.com",
    projectId: "e-commerce-ui-fcf2c",
    storageBucket: "e-commerce-ui-fcf2c.appspot.com",
    messagingSenderId: "405793472626",
    appId: "1:405793472626:web:270dfc92a739c810a4c2eb",
    measurementId: "G-6SJG4C8WX9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export {
    auth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged, 
    signOut,
    sendEmailVerification,
    RecaptchaVerifier,
    signInWithPhoneNumber,
}