var btnSignIn = document.querySelector("#btnsignin");
var btnSignUp = document.querySelector("#btnsignup");
var body = document.querySelector("body");

btnSignIn.addEventListener("click", function () {
    body.className = "sign-in-js"
});

btnSignUp.addEventListener("click", function () {
    body.className = "sign-up-js"
});