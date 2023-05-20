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

// Check if a new cache is available on page load.
window.addEventListener('load', function(e) {

  window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
      // Browser downloaded a new app cache.
      // Swap it in and reload the page to get the new hotness.
      window.applicationCache.swapCache();
      if (confirm('A new version of this site is available. Load it?')) {
        window.location.reload();
      }
    } else {
      // Manifest didn't changed. Nothing new to server.
    }
  }, false);

}, false);


document.getElementById('signin').addEventListener('click', function(event) {
  event.preventDefault(); // Mencegah aksi default dari tombol Sign Up

  var username = document.getElementById('fullname').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm-password').value;

    // Validasi password
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
  
    // Validasi konfirmasi password
    if (password !== confirmPassword) {
      alert('Password and confirm password do not match');
      return;
    }

  // Simpan nilai username dan email ke dalam localStorage
  localStorage.setItem('username', username);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  // Alihkan pengguna ke halaman utama (homepage)
  window.location.href = '../pilih-game/pilih_game.html';
});

fullname.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    email.focus();
  }
});

email.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    password.focus();
  }
});

password.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    confirmPassword.focus();
  }
});

confirmPassword.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById('signin').click();
  }
});
