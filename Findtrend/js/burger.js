const openBurger = document.querySelector(".burger");
const closeBurger = document.querySelector(".burger__top-close");
const burger = document.querySelector(".burger__content");
const loginBurgerBtn = document.getElementById("header-burger-login");
const registerBurgerBtn = document.getElementById("header-burger-register");

openBurger.addEventListener("click", function () {
  openBurger.classList.toggle("active");
});

loginBurgerBtn.addEventListener("mouseenter", function () {
  loginBurgerBtn.classList.add("login-hover");
  registerBurgerBtn.classList.add("register-hover");
});

loginBurgerBtn.addEventListener("mouseleave", function () {
  loginBurgerBtn.classList.remove("login-hover");
  registerBurgerBtn.classList.remove("register-hover");
});

registerBurgerBtn.addEventListener("mouseenter", function () {
  loginBurgerBtn.classList.add("login-hover");
  registerBurgerBtn.classList.add("register-hover");
});

registerBurgerBtn.addEventListener("mouseleave", function () {
  loginBurgerBtn.classList.remove("login-hover");
  registerBurgerBtn.classList.remove("register-hover");
});
