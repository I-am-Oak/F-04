const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const accesscode = loginForm.accesscode.value;

    if (accesscode === "ronaldo07") {
        alert("You have successfully logged in.");
        location.replace("home.html");
    } else {
        alert("Invalid Credentials");
        location.reload();
    }
})