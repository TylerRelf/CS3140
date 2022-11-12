var AnimateOn = false
var smallBall = false
var ballTop = 0
var ballLeft = 0

$(function() {
	CreateBall()
	$("#colors").click(ChangeColor)
	$("#larger").click(LargerBall)
	$("#smaller").click(SmallerBall)
	$("#bounce").click(function() {
		if (AnimateOn == false) {
			AnimateBall()
		}
		else {
			AnimateOn = false
		}
	})
})

function CreateBall() {
	$("#box").append('<div id="ball"></div>')
	$("#ball").css({
		"border-radius": "1000px",
		"height": "100px",
		"width": "100px",
		"backgroundColor": RandomColor,
		"margin": "200px",
		"margin-top": "200px"
})}

function RandomColor() {
	var hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
	var randomHex = "#"
	for (let i = 0; i < 6; i++) {
		var randomArray = Math.floor(Math.random() * hexArray.length)
		randomHex += hexArray[randomArray]
	}
	return randomHex
}

function ChangeColor() {
	$("#ball").css("backgroundColor", RandomColor)
}

function LargerBall() {
	smallBall = false
	if (parseInt($("#ball").css("height")) != 100) {
		ballTop = ballTop - 25
		ballLeft = ballLeft - 25
		$("#ball").css({
		"marginLeft": parseInt($("#ball").css("marginLeft")) - 25,
		"marginTop": parseInt($("#ball").css("marginTop")) - 25,
		"height": "100px",
		"width": "100px"
		})
	}
}

function SmallerBall() {
	smallBall = true
	if (parseInt($("#ball").css("height")) != 50) {
		ballTop = ballTop + 25
		ballLeft = ballLeft + 25
		$("#ball").css({
		"marginLeft": parseInt($("#ball").css("marginLeft")) + 25,
		"marginTop": parseInt($("#ball").css("marginTop")) + 25,
		"height": "50px",
		"width": "50px"
		})
	}
}

function AnimateBall() {
	AnimateOn = true
	ballTop = parseInt($("#ball").css("marginTop"))
	ballLeft = parseInt($("#ball").css("marginLeft"))
	var randomArray = [0.85, -0.85, 1.35, -1.35 -1.85, 1.85]
	var randomArray2 = [0.75, -0.75, 1.25, -1.25 -1.5, 1.5]
	var randomNegArray = [-1, -1.25, -1.5]
	var randomPosArray = [1, 1.25, 1.5]
	var randomSelect = Math.floor(Math.random() * randomArray.length)
	var directionLeft = randomArray[randomSelect]
	randomSelect = Math.floor(Math.random() * randomArray2.length)
	var directionTop = randomArray2[randomSelect]
	var moveInterval = setInterval(function() {
		console.log(ballTop)
		randomSelect = Math.floor(Math.random() * randomNegArray.length)
		randomSelect2 = Math.floor(Math.random() * randomPosArray.length)
		if (AnimateOn == false) {
			clearInterval(moveInterval)
		}
		if ((smallBall && ballLeft >= 450) || (!smallBall && ballLeft >= 400)) {
			directionLeft = randomNegArray[randomSelect]
		}
		if ((smallBall && ballTop >= 450) || (!smallBall && ballTop >= 400)) {
			directionTop = randomNegArray[randomSelect]
		}
		if (ballLeft <= 0) {
			directionLeft = randomPosArray[randomSelect2]
		}
		if (ballTop <= 0) {
			directionTop = randomPosArray[randomSelect2]
		}
		var colorSelect = Math.floor(Math.random() * randomArray.length)
		if (randomSelect == 2 && colorSelect == 3) {
			ChangeColor()
		}
		ballLeft += directionLeft
		ballTop += directionTop
		$("#ball").css("margin-left", ballLeft + directionLeft)
		$("#ball").css("margin-top", ballTop + directionTop)
	}, 20);
}