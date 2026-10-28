
const form = document.getElementById("studentForm");

const patterns = {
    name: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
};

const errorMessages = {
    name: "Name must contain alphabets only.",
    email: "Enter a valid email address.",
    phone: "Phone must contain exactly 10 digits.",
    password: "Password must contain an uppercase letter, a number and a special character."
};

function validateField(field) {
    const input = document.getElementById(field);
    const error = document.getElementById(field + "Error");

    const valid = patterns[field].test(input.value.trim());

    input.className = valid ? "valid" : "invalid";
    error.textContent = valid ? "" : errorMessages[field];

    return valid;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const fields = ["name", "email", "phone", "password"];

    const isValid = fields.map(validateField).every(Boolean);

    const result = document.getElementById("result");

    if (isValid) {
        result.textContent = "Registration Successful!";
        result.style.color = "green";
    } else {
        result.textContent = "Please correct the errors.";
        result.style.color = "red";
    }
});
