const form = document.querySelector("form");
const userNameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");
const terms = document.querySelector("#terms");
const errors = document.querySelector(".errors");
const errorList = document.querySelector(".errors-list");

form.addEventListener("submit", (e) => {
  if (
    userNameInput.value === "" ||
    passwordInput.value === "" ||
    passwordInput.value != passwordConfirmation.value ||
    terms.checked === false
  ) {
    e.preventDefault();
  }

  clearErrors();
  const errorMessages = [];

  if (userNameInput.value.length < 6) {
    errorMessages.push("Username must be at least 6 characters long");
  }

  if (passwordInput.value.length < 10) {
    errorMessages.push("Password must be at least 10 characters long");
  }

  if (passwordInput.value !== passwordConfirmation.value) {
    errorMessages.push("Passwords must match");
  }

  if (!terms.checked) {
    errorMessages.push("You must accept the terms");
  }

  showErrors(errorMessages);
});

function clearErrors() {
  while (errorList.firstElementChild) {
    errorList.removeChild(errorList.firstElementChild);
  }

  errors.classList.remove("show");
}

function showErrors(errorMessages) {
  errorMessages.forEach((errorMessage) => {
    let li = document.createElement("li");
    let liText = document.createTextNode(errorMessage);
    li.appendChild(liText);
    errorList.append(li);
  });
  errors.classList.add("show");
}
