const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const showHidePass = document.querySelector("#show-hide-pass");
const showHideConfirmPass = document.querySelector("#show-hide-confirm-pass");

fullname.addEventListener("focus", () => {
  focus(fullname);
});

fullname.addEventListener("blur", () => {
  blur(fullname);
});

email.addEventListener("focus", () => {
  focus(email);
});

email.addEventListener("blur", () => {
  blur(email);
});

password.addEventListener("focus", () => {
  focus(password);
});

password.addEventListener("blur", () => {
  blur(password);
});

confirmPassword.addEventListener("focus", () => {
  focus(confirmPassword);
});

confirmPassword.addEventListener("blur", () => {
  blur(confirmPassword);
});

function focus(element) {
  const parentEl = element.parentElement;
  parentEl.classList.add("active");
}

function blur(element) {
  const parentEl = element.parentElement;
  if (!element.value) {
    parentEl.classList.remove("active");
  }
}

window.addEventListener("pageshow", () => {
  focus(fullname);
  blur(fullname);
  focus(email);
  blur(email);
  focus(password);
  blur(password);
  focus(confirmPassword);
  blur(confirmPassword);
});

showHidePass.addEventListener("click", () => {
  togglePasswordVisibility(password, showHidePass);
});

showHideConfirmPass.addEventListener("click", () => {
  togglePasswordVisibility(confirmPassword, showHideConfirmPass);
});

function togglePasswordVisibility(inputField, showHideButton) {
  if (inputField.type === "password") {
    inputField.type = "text";
    showHideButton.src = "assets/show-eye.svg";
  } else {
    inputField.type = "password";
    showHideButton.src = "assets/hide-eye.svg";
  }
}
