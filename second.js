let navigation = document.querySelector("nav")
let burger = document.querySelector(".burger")
let shoppingBag = document.querySelector(".shoppingBag")
let radialMenu = document.querySelector(".cat-window")
let clouseButton = document.querySelector(".tomato")
let buttonBuy = document.querySelector(".buttonBuy")
let catWindowAll = document.querySelector(".cat-window__all")
let allCards = document.querySelector(".allCards")
let summKofee = document.querySelector(".summKofee")

let cardsArray = [
	{
		id: 1,
		img: "./images/download_1.png",
		name: "Капучіно",
		descr: "Дуже солодке капучіно",
		price: 80
	},
	{
		id: 2,
		img: "./images/download_1.png",
		name: "Капучіно",
		descr: "Дуже солодке капучіно",
		price: 70
	},
	{
		id: 3,
		img: "./images/download_1.png",
		name: "Капучіно",
		descr: "Дуже солодке капучіно",
		price: 60
	},
	{
		id: 4,
		img: "./images/download_1.png",
		name: "Капучіно",
		descr: "Дуже солодке капучіно",
		price: 180
	},
	{
		id: 5,
		img: "./images/download_1.png",
		name: "Капучіно",
		descr: "Дуже солодке капучіно",
		price: 800
	},
	{
		id: 6,
		img: "./images/download_1.png",
		name: "Капучіно",
		descr: "Дуже солодке капучіно",
		price: 80
	},
	{
		id: 7,
		img: "./images/download_1.png",
		name: "Капучіно",
		descr: "Дуже солодке капучіно",
		price: 50
	},
	{
		id: 8,
		img: "./images/download_1.png",
		name: "Капучіно",
		descr: "Дуже солодке капучіно",
		price: 40
	},
]

let shopArray = []

burger.addEventListener("click", toggleBurger)

function toggleBurger() {
	navigation.classList.toggle("active")
	burger.classList.toggle("active")
}

shoppingBag.addEventListener("click", function () {
	radialMenu.style.display = "block"
})

clouseButton.addEventListener("click", function () {
	radialMenu.style.display = "none"
})


function renderProd(arr) {
	arr.forEach(element => {
		allCards.innerHTML += `<div class="cardBlock">
			<img class="cardImage" src="${element.img}">
			<p class="cardName">${element.name}</p>
			<p class="cardDescription">${element.descr}</p>
			<div class="cardBuy">
				<span class="cardPrice">${element.price} грн</span>

				<button class="buttonBuy" data-id="${element.id}">
					<img class="basket" src="./images/catttsttstttst.png">
					<span class="button-text">Замовити</span>
				</button>
			</div>
		</div>`
	});
}

function renderBasket(array) {
	catWindowAll.innerHTML = ""
	array.forEach(el => {
		
		catWindowAll.innerHTML += `<div class="juise">
		<img class="humster" src=${el.img}>
		<div class="cheburasha">
			<p class="two-cats">${el.name}</p>
			<p class="peppa_pig">${el.descr}</p>
		</div>
		<div class="buttons">
			<button class="kolobok"> + </button>
			<input type = "number" class="baba-yaga" max = "99"></input>
			<button class="aladin"> - </button>
		</div>
		<p class="karloson">${el.price} грн</p>
		<button class="rapuszel" data-id="${el.id}"> Видалити</button>
	</div>`
	})
}
	

allCards.addEventListener("click", (event) => {
	let clickedBtn = event.target.closest(".buttonBuy")
	if (clickedBtn) {
		let index = cardsArray.findIndex(el => el.id === +clickedBtn.dataset.id)
		shopArray.push(cardsArray[index])
		renderBasket(shopArray)
		console.log(summKofee)
	}
})

catWindowAll.addEventListener("click", (event) => {
	let clickedBtn = event.target.closest(".rapuszel")
	if (clickedBtn) {
		let index = shopArray.findIndex(el => el.id === +clickedBtn.dataset.id)
		shopArray.splice(index, 1)
		renderBasket(shopArray)
	}
})

renderProd(cardsArray)