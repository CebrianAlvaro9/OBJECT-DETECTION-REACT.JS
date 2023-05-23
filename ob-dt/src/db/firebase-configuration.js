  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";

  import { getFirestore } from 'firebase/firestore/lite';

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAH1KVM3AUREJ2u2vSyKx4FlbfolGdVics",
    authDomain: "object-b2301.firebaseapp.com",
    projectId: "object-b2301",
    storageBucket: "object-b2301.appspot.com",
    messagingSenderId: "736470199649",
    appId: "1:736470199649:web:2d04b44042e40ba40e2920",
    measurementId: "G-YKTQV45VNT"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  

  export const db = getFirestore(app);
 


 