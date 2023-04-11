import {auth} from "../../firebaseConfig.js"
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import HomePage from "../HomePage/HomePage.js"

export default function () {
    const contentContainer=document.querySelector(".content");
    contentContainer.innerHTML="";

    const registerTitle=document.createElement("h2");
    registerTitle.setAttribute("id","title-register")
    registerTitle.innerHTML="Create an account"

    const registerForm=document.createElement("form");
    registerForm.setAttribute("id","register-form");

    const inputEmail=document.createElement("input");
    inputEmail.setAttribute("type","email");
    inputEmail.setAttribute("id","register-email-input");
    inputEmail.setAttribute("placeholder","email");

    const inputPassword1=document.createElement("input");
    inputPassword1.setAttribute("type","password");
    inputPassword1.setAttribute("id","register-first-input-password");
    inputPassword1.setAttribute("placeholder","password");

    const inputPassword2=document.createElement("input");
    inputPassword2.setAttribute("id","register-second-input-password");
    inputPassword2.setAttribute("type","password");
    inputPassword2.setAttribute("placeholder","repeat password");

    const submitButton=document.createElement("button");
    submitButton.textContent="Register";
    submitButton.setAttribute("type","submit");
    submitButton.setAttribute("id","register-button");
    
    registerForm.appendChild(inputEmail);
    registerForm.appendChild(inputPassword1);
    registerForm.appendChild(inputPassword2);
    registerForm.appendChild(submitButton);

    contentContainer.appendChild(registerTitle)
    contentContainer.appendChild(registerForm);

    registerForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        const email=inputEmail.value;
        const password1=inputPassword1.value;
        const password2=inputPassword2.value;

        if (password1===password2) {
            createUserWithEmailAndPassword(auth,email,password1).then(
                (userCredentials)=> {
                console.log(userCredentials.user.metadata.lastSignInTime);
                HomePage()
            })
        } else {
            window.alert("hasła są różne")
        }
    })
}