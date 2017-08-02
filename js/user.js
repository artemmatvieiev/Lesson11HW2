helpId.innerText = helpText

square1.addToArr()
square2.addToArr()
square3.addToArr()
square4.addToArr()
square5.addToArr()

document.addEventListener("keyup", headler)

returnMenuId.addEventListener("click", function () {
	buttonsId.style.display = "flex"
	stat.style.display = "none"
})
const timer = new Timer(1000)

const content = new Content(buttonsId, playingFieldId, statId)

const game = new Game(buttonsId, menuId)

