export default function () {
    const loginForm=document.createElement("form");
    loginForm.setAttribute("id", "login-form");

    const inputEmail=document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("id","input-email-login");
    inputEmail.setAttribute("placeholder","email")

    const inputPassword=document.createElement("input");
    inputPassword.setAttribute("type","password");
    inputPassword.setAttribute("id", "input-password-login");
    inputPassword.setAttribute("placeholder","password");

    const logInButton=document.createElement("button");
    logInButton.setAttribute("type","submit");
    logInButton.setAttribute("id","login-button");
    logInButton.textContent="Sign in"

    loginForm.appendChild(inputEmail);
    loginForm.appendChild(inputPassword);
    loginForm.appendChild(logInButton);

    return loginForm
}