import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyBMqKAhOLpzPZiEbHODEbqvaN8_k9D8sGk",
    authDomain: "linkedin-clone-e47a7.firebaseapp.com",
    projectId: "linkedin-clone-e47a7",
    storageBucket: "linkedin-clone-e47a7.appspot.com",
    messagingSenderId: "120029155237",
    appId: "1:120029155237:web:d149f7d86faa64749c224c",
    measurementId: "G-NXH2TP1ZXK"
  }

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export {db, auth };