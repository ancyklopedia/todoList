// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9snxOt7nH9EXFO6UtODnAR5k0_jFAgmw",
  authDomain: "todosy-51ddf.firebaseapp.com",
  databaseURL: "https://todosy-51ddf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todosy-51ddf",
  storageBucket: "todosy-51ddf.appspot.com",
  messagingSenderId: "318940111160",
  appId: "1:318940111160:web:7612fc99b7b3e61f1ba1cd",
  measurementId: "G-5SJ39LL146"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database=getDatabase(app);
export const firestore=getFirestore(app);
export const storage=getStorage(app)