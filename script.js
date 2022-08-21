const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");
const shoppingCart = document.querySelector(".shopping-cart");
const cartBtn = document.querySelector("#cart-btn");
const loginForm = document.querySelector(".login-form");
const loginBtn = document.querySelector("#login-btn");
const headerNavbar = document.querySelector(".header .navbar");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");
    document.querySelector(".search-form input").value = "";
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
    headerNavbar.classList.remove("active");
});

cartBtn.addEventListener("click", () => {
    shoppingCart.classList.toggle("active");
    searchForm.classList.remove("active");
    loginForm.classList.remove("active");
    headerNavbar.classList.remove("active");
});

loginBtn.addEventListener("click", () => {
    loginForm.classList.toggle("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    headerNavbar.classList.remove("active");
});

menuBtn.addEventListener("click", () => {
    headerNavbar.classList.toggle("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
});

window.addEventListener("onscroll", () => {
    headerNavbar.classList.remove("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
})