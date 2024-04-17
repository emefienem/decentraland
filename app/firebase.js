// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8ih-9Tic_CWD8SjBJ2fdqt0N28XBMZmI",
  authDomain: "decentraland-authenticate.firebaseapp.com",
  projectId: "decentraland-authenticate",
  storageBucket: "decentraland-authenticate.appspot.com",
  messagingSenderId: "54647237958",
  appId: "1:54647237958:web:d50f7680fa86d72c044947",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
