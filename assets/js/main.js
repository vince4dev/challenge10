// -- FORM & MODAL SUCCESS MESSAGE --
const closeBtn = document.getElementById("close-btn");
const modal = document.getElementById("modal");
const emailInput = document.getElementById("email");
const form = document.getElementById("form");
const errorMessage = document.getElementById("error-message");

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+$/;

function setError(message) {
  errorMessage.textContent = message;
  emailInput.classList.add("invalid");
}

function clearError() {
  errorMessage.textContent = "";
  emailInput.classList.remove("invalid");
}

emailInput.addEventListener("input", (e) => {
  if (errorMessage.textContent) {
    clearError();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const isValidEmail = emailRegex.test(emailValue);

  if (emailValue === "" || !isValidEmail) {
    const message =
      emailValue === "" ? "Email is required" : "Valid email required";
    setError(message);
    emailInput.focus();
    return;
  }

  clearError();
  emailInput.value = "";

  // open the email sending confirmation window
  modal.setAttribute("aria-hidden", "true");
  modal.style.display = "flex";
});

// close the email sending confirmation window
closeBtn.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "false");
  modal.style.display = "none";
  emailInput.focus();
});
