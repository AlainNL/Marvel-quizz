import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc } from "firebase/firestore";

//Firebase config

const config = {
    apiKey: "AIzaSyCI9fuGYReIs_dD_BTXQhODaGK8AfStraI",
    authDomain: "marvel-quizz-bb663.firebaseapp.com",
    projectId: "marvel-quizz-bb663",
    storageBucket: "marvel-quizz-bb663.appspot.com",
    messagingSenderId: "59440714534",
    appId: "1:59440714534:web:71c5bd38c839b8aa7ce7e7"
  };


  const app = initializeApp(config);
  export const auth = getAuth(app);

  export const firestore = getFirestore();
  export const user = (uid) => doc(firestore, `users/${uid}`);
