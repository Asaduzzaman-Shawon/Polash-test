// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgot4-ffdBEGje28Xf07faPQv27uu8Lkk",
  authDomain: "sawon-ahmed.firebaseapp.com",
  projectId: "sawon-ahmed",
  storageBucket: "sawon-ahmed.firebasestorage.app",
  messagingSenderId: "551268006159",
  appId: "1:551268006159:web:70aed99078fd0d67dc267a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth