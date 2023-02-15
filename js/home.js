"use strict"
let loggedUser;

if (localStorage.getItem("loggedUser")){
    loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
}

if (!loggedUser){
    location.assign("./index.html");
}

document.querySelector("#userName").innerHTML = loggedUser.name;

document.querySelector("#logOutBtn").addEventListener("click", logOut);

function logOut(){
    localStorage.removeItem("loggedUser");
    location.assign("./index.html");
}