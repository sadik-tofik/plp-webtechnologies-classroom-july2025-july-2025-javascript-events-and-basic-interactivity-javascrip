// Event Handling and Interactive Features
// --------------------------------------

// Light/Dark Mode Toggle
const toggleModeBtn = document.getElementById("toggle-mode");
toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Feature
let counter = 0;
const counterValue = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");

incrementBtn.addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

decrementBtn.addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});

// Form Validation
// ---------------
const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const formSuccess = document.getElementById("form-success");

function validateName(name) {
  return name.trim().length >= 2;
}

function validateEmail(email) {
  // Simple email regex
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

function validatePassword(password) {
  // At least 6 characters, one number
  return /^(?=.*\d).{6,}$/.test(password);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formSuccess.textContent = "";

  if (!validateName(nameInput.value)) {
    nameError.textContent = "Name must be at least 2 characters.";
    valid = false;
  }
  if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }
  if (!validatePassword(passwordInput.value)) {
    passwordError.textContent =
      "Password must be at least 6 characters and contain a number.";
    valid = false;
  }

  if (valid) {
    formSuccess.textContent = "Sign up successful!";
    form.reset();
  }
});

// Optional: Real-time validation
nameInput.addEventListener("input", () => {
  nameError.textContent = validateName(nameInput.value)
    ? ""
    : "Name must be at least 2 characters.";
});
emailInput.addEventListener("input", () => {
  emailError.textContent = validateEmail(emailInput.value)
    ? ""
    : "Please enter a valid email address.";
});
passwordInput.addEventListener("input", () => {
  passwordError.textContent = validatePassword(passwordInput.value)
    ? ""
    : "Password must be at least 6 characters and contain a number.";
});
