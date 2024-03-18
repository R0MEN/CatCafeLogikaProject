let navigation = document.querySelector("nav")
let burger = document.querySelector(".burger")

burger.addEventListener("click", toggleBurger)

function toggleBurger() {
	navigation.classList.toggle("active")
	burger.classList.toggle("active")
}
