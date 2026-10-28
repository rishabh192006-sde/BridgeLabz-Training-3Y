
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const validUsername = /^.{5,}$/.test(username);

    const validPassword =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(password);

    document.getElementById("usernameError").textContent =
        validUsername ? "" : "Username must contain at least 5 characters.";

    document.getElementById("passwordError").textContent =
        validPassword ? "" : "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character.";

    const result = document.getElementById("result");

    if (validUsername && validPassword) {
        result.textContent = "Login validation successful!";
        result.style.color = "green";
    } else {
        result.textContent = "Please correct the errors.";
        result.style.color = "red";
    }
});
