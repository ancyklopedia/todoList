import HomePage from "./components/HomePage/HomePage.js";
import TodoPage from "./components/TodoPage/TodoPage.js";
import LoginPage from "./components/LoginPage/LoginPage.js";
import { auth } from "./firebaseConfig.js";
import {
    onAuthStateChanged,
    signOut,
  } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

const contentContainer = document.querySelector(".content");

// Selecting buttons
const homeButton=document.getElementById("home-anchor");
const todosButton=document.getElementById("todos-anchor");
const loginButton=document.getElementById("login-anchor");

// napis "log in" lub "log out" w zalezności od zalogowania
onAuthStateChanged(auth, (user)=>{
    if (user) {
        loginButton.textContent="Log out"
    } else {
        loginButton.textContent="Log in";
        HomePage()
    }
})

// HomePage przy pierwszym załadowaniu
HomePage();

// Adding event listeners to buttons
homeButton.addEventListener("click", HomePage);
todosButton.addEventListener("click", TodoPage);
loginButton.addEventListener("click",()=>{
    const user=auth.currentUser;
    if(user){
        signOut(auth)
    } else {
        LoginPage()
    }
});


