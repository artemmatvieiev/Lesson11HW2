/**
 * @class Timer.
 * 
 * @param {number} ms 
 */
function Timer(ms) {
	this.ms = ms
	this.interval = null
}
Timer.prototype.start = function (callback) {
	this.interval = setInterval(callback, this.ms)
	return this
}
Timer.prototype.stop = function () {
	clearInterval(this.interval)
	return this
}
Timer.prototype.stopAfter = function (ms, callback) {
	setTimeout(callback, ms)
	return this
}

/**
 * @class Square.
 * 
 * @param {string} requestColor 
 * @param {number} responseColor 
 */
function Square(requestColor,responseColor) {
	this.requestColor = requestColor
	this.responseColor = responseColor
}
Square.prototype.addToArr = function () {
	colors.push(this)
	return colors
}

/**
 * @class Content.
 * 
 * @param {object} buttonsId 
 * @param {object} playingFieldId 
 * @param {object} statId 
 */

function Content(buttonsId, playingFieldId, statId) {
	this.buttonsId = buttonsId
	this.playingFieldId = playingFieldId
	this.statId = statId
}
Content.prototype.show = function (
	 displayButtons, 
	 displayplayingField, 
	 displayStat) {
		this.buttonsId.style.display = displayButtons
		this.playingFieldId.style.display = displayplayingField
		this.statId.style.display = displayStat
}

/**
 * @class Game.
 * 
 * @param {object} buttonsId 
 * @param {object} menuId 
 */
function Game(buttonsId, menuId) {
	this.buttonsId = buttonsId
	this.menuId = menuId
		
	this.buttonsId.addEventListener(
            "click",
            this.onClickButtons
        )
	this.menuId.addEventListener(
            "change-view",
            this.onChangeViewMenu
        )
}
Game.prototype.onClickButtons = function(event) {
	const { target } = event
	const _event = new CustomEvent("change-view", {
			detail: {
					type: target.dataset.type
			}
	})
	menuId.dispatchEvent(_event)
}
Game.prototype.onChangeViewMenu = function(event) {
	const { detail: { type } } = event
	const { menuId } = this
	switch (type) {
		case "start": {
			turnTimer.innerText = 15
			gameNum = localStorage.length + 1
			allStatisticsId.innerText = ""
			content.show("none", "flex", "none")
			squareId.style.background = colors[Math.floor(Math.random()*5)].requestColor
			timer.start(function () {
				turnTimer.innerText--
				if(turnTimer.innerText == 0)
					{ let arrResult = []
					 	if(JSON.parse(localStorage.getItem("json"))) 
							arrResult = arrResult.concat(JSON.parse(localStorage.getItem("json")))
						arrResult.push(result)
					  localStorage.setItem("json", JSON.stringify(arrResult))
						console.log(localStorage)
//						localStorage.setItem(`${gameNum}`, `${result}`)
						content.show("flex", "none", "none")
						result = 0
				}
			}).stopAfter(15500, timer.stop.bind(timer))
			break
		}
		case "statistics": {
			content.show("none", "none", "flex")
			/*let res = ""
			for(let i in localStorage){
				 res += `игра №${i} правильных нажатий ${localStorage.getItem(`${i}`)}\n`
			}
			allStatisticsId.innerText = res*/
			let resJson = JSON.parse(localStorage.getItem("json"))
			let res = ""
			for(let i in resJson){
				 res += `игра №${+i+1} правильных нажатий ${resJson[i]}\n`
			}
			allStatisticsId.innerText = res
			if(!allStatisticsId.innerText) {allStatisticsId.innerText = "Статистика пуста!"}
			break
		}
		case "clearStatistics": {
			localStorage.clear()
			allStatisticsId.innerText = ""
			break
		}
	}
}