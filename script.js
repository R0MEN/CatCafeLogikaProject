let navigation = document.querySelector("nav")
let burger = document.querySelector(".burger")
let sliderList = document.querySelector(".slider__list")
let buttonLeft = document.getElementById("prev")
let buttonRight = document.getElementById("next")
let toLeft = 0

// Бургер меню
burger.addEventListener("click", toggleBurger)

function toggleBurger() {
	navigation.classList.toggle("active")
	burger.classList.toggle("active")
}


// Слайдер
buttonRight.addEventListener("click", function(){
    toLeft = "-1053px"
    sliderList.style.left = toLeft
})


buttonLeft.addEventListener("click", function  (){  
        sliderList.style.left = "25px"
})

