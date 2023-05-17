const user = document.querySelector("#username"),
  pass = document.querySelector("#password"),
  showHidePass = document.querySelector("#show-hide-pass");

user.addEventListener("focus", () => {
  focus(user);
});

user.addEventListener("blur", () => {
  blur(user);
});

pass.addEventListener("focus", () => {
  focus(pass);
});

pass.addEventListener("blur", () => {
  blur(pass);
});

function focus(e) {
  parentEl = e.parentElement;
  parentEl.classList.add("active");
}

function blur(e) {
  parentEl = e.parentElement;
  if (!e.value) {
    parentEl.classList.remove("active");
  }
}

window.addEventListener("pageshow", () => {
  focus(user);
  blur(user);
  focus(pass);
  blur(pass);
});

showHidePass.addEventListener("click", () => {
  if (pass.type === "password") {
    pass.type = "text";
    showHidePass.src = "login/assets/show-eye.svg";
  } else {
    pass.type = "password";
    showHidePass.src = "login/assets/hide-eye.svg";
  }
});
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