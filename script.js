var css= document.querySelector("h3");
var color1 = document.querySelector(".color1");  //类选择时加点
var color2 = document.querySelector(".color2");

var body = document.getElementById("gradient");
// click ,mousesent,keypress 都是event 作为input
// 选择颜色也是一种event input


function setGradient(){
		body.style.background = 
	"linear-gradient(to right,"
	+ color1.value
	+", "
	+color2.value
	+")";
    

	// 增加一行 
	css.textContent = body.style.background+";";

	// css.innerHTML
	// css.createTextNode
}

color1.addEventListener("input",setGradient);


color2.addEventListener("input",setGradient);