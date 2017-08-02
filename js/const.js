const colors = []
let gameNum = 1
const turnTimer = document.getElementById("turnTimer")
const squareId = document.getElementById("square")
const helpId = document.getElementById("help")
const playingFieldId = document.getElementById("playingField")
const buttonsId = document.getElementById("buttons")
const startId = document.getElementById("start")
const statisticsId = document.getElementById("statistics")
const clearStatisticsId = document.getElementById("clearStatistics")
const returnMenuId = document.getElementById("returnMenu")
const allStatisticsId = document.getElementById("allStatistics")
const menuId = document.getElementById("menu")
const statId = document.getElementById("stat")
const helpText = `Цвета соответствуют следующим клавишам:
q - желтый
r - красный
s - голубой
t - зеленый
u - черный
`
const square1 = new Square("yellow", 81)
const square2 = new Square("red", 82)
const square3 = new Square("blue", 83)
const square4 = new Square("green", 84)
const square5 = new Square("black", 85)
let result = 0

const headler = function (event) {
	for(let i of colors){
		if(event.keyCode == i["responseColor"]){
			squareId.style.backgroundColor == i["requestColor"] ? ++result : result
			squareId.style.background = colors[Math.floor(Math.random()*5)].requestColor 
		}
	}
}