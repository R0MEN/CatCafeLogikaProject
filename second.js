let navigation = document.querySelector("nav")
let burger = document.querySelector(".burger")
let shoppingBag = document.querySelector(".shoppingBag")
let radialMenu = document.querySelector(".cat-window")
let clouseButton = document.querySelector(".tomato")
let buttonBuy = document.querySelector(".buttonBuy")
let catWindowAll = document.querySelector(".cat-window__all")
let allCards = document.querySelector(".allCards")
let summKofee = document.querySelector(".summKofee")
let buttonBascet = document.querySelector(".buttonBascet")
let inputBascet = document.querySelector(".inputBascet")

let price = 0
let contAr = 0

let cardsArray = [
	{
		id: 1,
		img: "./images/download_1.png",
		name: "Капучіно",
		descr: "Дуже солодке капучіно",
		price: 69
	},
	{
		id: 2,
		img: "./images/ecspresso.jpg",
		name: "Експресо",
		descr: "Італійська відповідь на вашу невідкладну потребу кофеїну",
		price: 75
	},
	{
		id: 3,
		img: "./images/late.jpg",
		name: "Лате",
		descr: "Допомагає для гарного відпочинку",
		price: 80
	},
	{
		id: 4,
		img: "./images/hotcocolat.jpg",
		name: "Гарячий шоколад",
		descr: "Дійсно гарячий",
		price: 85
	},
	{
		id: 5,
		img: "./images/americano.jpg",
		name: "Американо",
		descr: "Американо - прямо з Америки",
		price: 50
	},
	{
		id: 6,
		img: "./images/kruasan.jpg",
		name: "Круасан",
		descr: "Відчувай себе як в парижі",
		price: 80
	},
	{
		id: 7,
		img: "./images/cocolatecake.jpg",
		name: "Шоколадний торт",
		descr: "Всього кусочок",
		price: 120
	},
	{
		id: 8,
		img: "./images/makarons.jpg",
		name: "Макаронс",
		descr: "Французький десерт з хрумкими мигдалевими подушечками (або печенько)",
		price: 90
	},
]

let shopArray = []

burger.addEventListener("click", toggleBurger)

function toggleBurger() {
	navigation.classList.toggle("active")
	burger.classList.toggle("active")
}

buttonBascet.addEventListener("click", function () {
	if (inputBascet.value === "") {
		alert("Спочатку введіть номер столику!")
	}
	else {
		alert("Ваш столик успішно заброньований")
		location.reload()
	}
	
})

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
				<button class="buttonBuy" data-id="${element.id}" data-price="${element.price}">
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
		price += +cardsArray[index].price
		summKofee.innerHTML = price
		renderBasket(shopArray)
	}
})

catWindowAll.addEventListener("click", (event) => {
	let clickedBtn = event.target.closest(".rapuszel")
	if (clickedBtn) {
		let index = shopArray.findIndex(el => el.id === +clickedBtn.dataset.id)
		price -= +shopArray[index].price
		shopArray.splice(index, 1)
		summKofee.innerHTML = price
		renderBasket(shopArray)
	}
})

renderProd(cardsArray)