import LoginForm from "../LoginForm/LoginForm.js"
import RegisterForm from "../RegisterForm/RegisterForm.js";
import { auth } from "../../firebaseConfig.js";
import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js"
import HomePage from "../HomePage/HomePage.js";

export default function () {

    const contentContainer=document.querySelector(".content");
    contentContainer.innerHTML="";

    const title=document.createElement("h2");
    title.textContent="Log in or sign up";

    const subtitle=document.createElement("p");
    subtitle.textContent="Our authentication mechanism uses Firebase Auth and is 100% secure."

    const label=document.createElement("label");
    label.textContent="Login to your account";

    // logowanie
    const loginForm=LoginForm()

    loginForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        const email=document.getElementById("input-email-login").value;
        const password=document.getElementById("input-password-login").value;

        signInWithEmailAndPassword(auth,email,password).then((userCredentials)=>{
            console.log("Logged in, user creds:", userCredentials);
            HomePage()
        }).catch((err)=>{
            console.error("Failed to log in", err)
        })
    })

    // przekierowanie do rejestracji
    const registerTo=document.createElement("h3");
    registerTo.innerHTML="Don't have an account?"

    const registerButton=document.createElement("button");
    registerButton.setAttribute("id","register-button");
    registerButton.textContent="Register";
    registerButton.addEventListener("click", RegisterForm);

    contentContainer.appendChild(title);
    contentContainer.appendChild(subtitle);
    contentContainer.appendChild(label);
    contentContainer.appendChild(loginForm);
    contentContainer.appendChild(registerTo);
    contentContainer.appendChild(registerButton);

}