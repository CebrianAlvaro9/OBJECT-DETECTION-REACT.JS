  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";

  import { getFirestore } from 'firebase/firestore/lite';

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBATPRfMYyiv1AOfxkvhm1zRvCVY0Tb4Kg",
    authDomain: "cameras-4070f.firebaseapp.com",
    projectId: "cameras-4070f",
    storageBucket: "cameras-4070f.appspot.com",
    messagingSenderId: "633689129426",
    appId: "1:633689129426:web:da73ed1b645044ec0fc80b",
    measurementId: "G-VHG1B9JZ2C"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  

  export const db = getFirestore(app);
 


 