"use strict"

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let users = [];
let loggedUser;

let emailPattern = /\w{4}@gmail.com$/;
let passwordPattern = /\w{6}/;

email.addEventListener("input", validatingEmail);
password.addEventListener("input", ValidatingPassword);
document.querySelector("#signInBtn").addEventListener("click", signIn)

if (localStorage.getItem("users")){
    users = JSON.parse(localStorage.getItem("users"));
}

if (localStorage.getItem("loggedUser")){
    loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
}

if (loggedUser){
    location.assign("./home.html");
}

// Validating Inputs
function validatingEmail(){
    document.querySelector("#wrongEmail").classList.replace("d-block", "d-none");
    if (emailPattern.test(email.value)){
        document.querySelector("#invalidEmail").classList.replace("d-block", "d-none");
        return true;
    } else {
        document.querySelector("#invalidEmail").classList.replace("d-none", "d-block");
    }
}

function ValidatingPassword(){
    document.querySelector("#wrongPassword").classList.replace("d-block", "d-none");
    if (passwordPattern.test(password.value)){
        document.querySelector("#invalidPassword").classList.replace("d-block", "d-none");
        return true;
    } else {
        document.querySelector("#invalidPassword").classList.replace("d-none", "d-block");
    }
}

function validation(){
    let $validatingEmail = validatingEmail();
    let $validatingPassword = ValidatingPassword();

    if ($validatingEmail && $validatingPassword){
        return true;
    }
}

// Sign In
function signIn(){
    if (validation()){
        for (let i = 0; i < users.length; i++){
            if (email.value == users[i].email){
                if (password.value == users[i].password){
                    loggedUser = users[i];
                    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
                    location.assign("./home.html");
                    return;
                } else {
                    document.querySelector("#wrongPassword").classList.replace("d-none", "d-block");
                    return;
                }
            }
        }
        document.querySelector("#wrongEmail").classList.replace("d-none", "d-block");
    }
}
