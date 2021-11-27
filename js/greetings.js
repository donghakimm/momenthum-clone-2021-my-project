const loginForm = document.querySelector("#login-screen-cover");
const loginInputFirst = document.querySelector("#login-screen input:first-child");
const loginInputLast = document.querySelector("#login-screen input:last-child");
const momentumScreen = document.querySelector("#momentum-screen-cover");
const greeting = document.querySelector("#greeting");
const todoAsk = document.querySelector("#todo-ask");
const screenHeader = document.querySelector("#screen-header-cover");
const navBar = document.querySelector("#nav-screen-cover");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInputFirst.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintMomentum(username);
    
}

function paintMomentum(username) {
    if (new Date().getHours() >= 20 && new Date().getHours() <=4) {
        greeting.innerText = `Good evening, ${username}`;
    } else if (new Date().getHours() >= 5 && new Date().getHours() < 12){
        greeting.innerText = `Good morning, ${username}`;
    } else {
        greeting.innerText = `Good afternoon, ${username}`;
    }
    todoAsk.innerText = "Today To-do List";
    greeting.classList.remove(HIDDEN_CLASSNAME); 
    momentumScreen.classList.remove(HIDDEN_CLASSNAME);     
    screenHeader.classList.remove(HIDDEN_CLASSNAME);
    navBar.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);   
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

function greetingMomentum() {
    username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText="";
    if (new Date().getHours() >= 20 || new Date().getHours() <=4) {
        greeting.innerText = `Good evening, ${username}`;
    } else if (new Date().getHours() >= 5 && new Date().getHours() < 12){
        greeting.innerText = `Good morning, ${username}`;
    } else {
        greeting.innerText = `Good afternoon, ${username}`;
    }
}

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    
} else {
    paintMomentum(savedUsername); 
}

setInterval(greetingMomentum, 1000);