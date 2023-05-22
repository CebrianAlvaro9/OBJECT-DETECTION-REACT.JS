  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";

  import { getFirestore } from 'firebase/firestore/lite';

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAkQBXPF3P-aWfXICvFFK9ePmtotK_LOg4",
    authDomain: "obdt-1bab2.firebaseapp.com",
    projectId: "obdt-1bab2",
    storageBucket: "obdt-1bab2.appspot.com",
    messagingSenderId: "512936108910",
    appId: "1:512936108910:web:160a237ee7ee848ea5177f",
    measurementId: "G-NW5D8G5G4W"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  

  export const db = getFirestore(app);
 


 