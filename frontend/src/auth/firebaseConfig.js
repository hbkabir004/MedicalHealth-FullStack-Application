// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDP5SJIHmg6CXM1VaW1B1kCgfCvAP1wulY",
    authDomain: "hbk-medical-health.firebaseapp.com",
    projectId: "hbk-medical-health",
    storageBucket: "hbk-medical-health.appspot.com",
    messagingSenderId: "913086901117",
    appId: "1:913086901117:web:7a6999c3eccf6212a13a14"
  
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
