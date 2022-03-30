import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArpuTBxsCI3mSGenz4ezeKWS_Fm2XX6cA",
  authDomain: "crypto-currency-app-f4b9a.firebaseapp.com",
  projectId: "crypto-currency-app-f4b9a",
  storageBucket: "crypto-currency-app-f4b9a.appspot.com",
  messagingSenderId: "89139004196",
  appId: "1:89139004196:web:711a44dabaabead909e9b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);