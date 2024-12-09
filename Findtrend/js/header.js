const loginBtn = document.getElementById("header-login");
const registerBtn = document.getElementById("header-register");

loginBtn.addEventListener("mouseenter", function () {
  loginBtn.classList.add("login-hover");
  registerBtn.classList.add("register-hover");
});

loginBtn.addEventListener("mouseleave", function () {
  loginBtn.classList.remove("login-hover");
  registerBtn.classList.remove("register-hover");
});

registerBtn.addEventListener("mouseenter", function () {
  loginBtn.classList.add("login-hover");
  registerBtn.classList.add("register-hover");
});

registerBtn.addEventListener("mouseleave", function () {
  loginBtn.classList.remove("login-hover");
  registerBtn.classList.remove("register-hover");
});
