const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");
    document.querySelector(".search-form input").value = "";
})

const shoppingCart = document.querySelector(".shopping-cart");
const cartBtn = document.querySelector("#cart-btn");

cartBtn.addEventListener("click", () => {
    shoppingCart.classList.toggle("active");
})
