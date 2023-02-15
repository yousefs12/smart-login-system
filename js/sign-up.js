"use strict"
let username = document.querySelector("#name")
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let users = [];

let namePattern = /\w{1}/;
let emailPattern = /\w{4}@gmail.com$/;
let passwordPattern = /\w{6}/;

if (localStorage.getItem("users")){
    users = JSON.parse(localStorage.getItem("users"));
}

username.addEventListener("input", validatingName);
email.addEventListener("input", validatingEmail);
password.addEventListener("input", ValidatingPassword);
document.querySelector("#signUpBtn").addEventListener("click", signUp)


// Validating Inputs
function validatingName(){
    if (namePattern.test(username.value)){
        document.querySelector("#invalidUsername").classList.replace("d-block", "d-none");
        return true;
    } else {
        document.querySelector("#invalidUsername").classList.replace("d-none", "d-block");
    }
}

function validatingEmail(){
    if (emailPattern.test(email.value)){
        document.querySelector("#invalidEmail").classList.replace("d-block", "d-none");
        return true;
    } else {
        document.querySelector("#invalidEmail").classList.replace("d-none", "d-block");
    }
}

function ValidatingPassword(){
    if (passwordPattern.test(password.value)){
        document.querySelector("#invalidPassword").classList.replace("d-block", "d-none");
        return true;
    } else {
        document.querySelector("#invalidPassword").classList.replace("d-none", "d-block");
    }
}

function validation(){
    let $validatingName = validatingName()
    let $validatingEmail = validatingEmail();
    let $validatingPassword = ValidatingPassword();

    if ($validatingEmail && $validatingPassword){
        return true;
    }
}

// Sign Up
function signUp(){

    if (validation()){
        let user = {}
        user.name = username.value;
        user.email = email.value;
        user.password = password.value;

        for (let i = 0; i < users.length; i++){
            if (user.email == users[i].email){
                alert("E-mail is already used.")
                return;
            }
        }

        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        location.assign("./index.html");
    }
}