// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiYS19EReLyiGsjnlJsZkC7W2GTRnH50E",
  authDomain: "netflixgpt-bd50c.firebaseapp.com",
  projectId: "netflixgpt-bd50c",
  storageBucket: "netflixgpt-bd50c.appspot.com",
  messagingSenderId: "215259901907",
  appId: "1:215259901907:web:004e11bcf7050646a4c926",
  measurementId: "G-TYLNNG0B8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();