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
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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
  } else {
    // Clear previous errors
    errorText(passwordErrorParagraph, "");

    // Check all password rules
    let passwordErrors = [];
    if (password.length < 8) passwordErrors.push("at least 8 characters");
    if (!/[A-Z]/.test(password)) passwordErrors.push("one uppercase letter");
    if (!/[a-z]/.test(password)) passwordErrors.push("one lowercase letter");
    if (!/[0-9]/.test(password)) passwordErrors.push("one number");
    if (!/[!@#$%^&*]/.test(password))
      passwordErrors.push("one special character");
    if (/\s/.test(password)) passwordErrors.push("no spaces");

    if (passwordErrors.length > 0) {
      isValid = false;
      dataInvalid(passwordInput, "true");
      errorText(
        passwordErrorParagraph,
        `Password needs: ${passwordErrors.join(", ")}.`
      );
    }
  }

  return isValid;
}
// firstNameInput.addEventListener("input", validateInput);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!validateInput()) return;

  form.reset();
});
