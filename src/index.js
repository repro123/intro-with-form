"use strict";

const form = document.querySelector("form");
const firstNameInput = document.querySelector("#firstName");
const firstNameErrorParagraph = document.querySelector("#firstNameError");

const lastNameInput = document.querySelector("#lastName");
const lastNameErrorParagraph = document.querySelector("#lastNameError");

const emailInput = document.querySelector("#email");
const emailErrorParagraph = document.querySelector("#emailError");

const passwordInput = document.querySelector("#password");
const passwordErrorParagraph = document.querySelector("#passwordError");

function errorText(element, message) {
  element.textContent = message;
}

function dataInvalid(element, value) {
  element.setAttribute("data-invalid", value);
}

// validate all inputs
function validateInput() {
  let isValid = true;
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password = passwordInput.value.trim();

  //   default data invalid to be false
  dataInvalid(firstNameInput, String(!isValid));
  dataInvalid(lastNameInput, String(!isValid));
  dataInvalid(emailInput, String(!isValid));
  dataInvalid(passwordInput, String(!isValid));

  //   default error paragraph text contents
  errorText(firstNameErrorParagraph, "");
  errorText(lastNameErrorParagraph, "");
  errorText(emailErrorParagraph, "");
  errorText(passwordErrorParagraph, "");

  //   validate first name input
  if (!firstName) {
    isValid = false;
    dataInvalid(firstNameInput, String(!isValid));
    errorText(firstNameErrorParagraph, "First name cannot be empty");
  }

  //   validate last name input
  if (!lastName) {
    isValid = false;
    dataInvalid(lastNameInput, String(!isValid));
    errorText(lastNameErrorParagraph, "Last name cannot be empty");
  }

  //   validate email input
  if (!email) {
    isValid = false;
    dataInvalid(emailInput, String(!isValid));
    errorText(emailErrorParagraph, "Email cannot be empty");
  } else if (!emailRegex.test(email)) {
    isValid = false;
    dataInvalid(emailInput, String(!isValid));
    errorText(emailErrorParagraph, "Looks like this is not a valid email");
  }

  //   validate passwords

  if (!password) {
    isValid = false;
    dataInvalid(passwordInput, String(!isValid));
    errorText(passwordErrorParagraph, "Password cannot be empty");
  }

  // minimum length of 8
  if (password.length < 8) {
    isValid = false;
    dataInvalid(passwordInput, String(!isValid));
    errorText(
      passwordErrorParagraph,
      "Password should be at least 8 characters."
    );
  }

  // Uppercase letter
  if (!/[A-Z]/.test(password)) {
    isValid = false;
    dataInvalid(passwordInput, String(!isValid));
    errorText(passwordErrorParagraph, "Include at least one uppercase letter.");
  }

  // Lowercase letter
  if (!/[a-z]/.test(password)) {
    isValid = false;
    dataInvalid(passwordInput, String(!isValid));
    errorText(passwordErrorParagraph, "Include at least one lowercase letter.");
  }

  // Number
  if (!/[0-9]/.test(password)) {
    isValid = false;
    dataInvalid(passwordInput, String(!isValid));
    errorText(passwordErrorParagraph, "Include at least one number.");
  }

  // Special character
  if (!/[!@#$%^&*]/.test(password)) {
    isValid = false;
    dataInvalid(passwordInput, String(!isValid));
    errorText(
      passwordErrorParagraph,
      "Include at least one special character (!@#$%^&*)."
    );
  }

  // No whitespace
  if (/\s/.test(password)) {
    isValid = false;
    dataInvalid(passwordInput, String(!isValid));
    errorText(passwordErrorParagraph, "Password cannot contain spaces.");
  }

  return isValid;
}
// firstNameInput.addEventListener("input", validateInput);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!validateInput()) return;
});
