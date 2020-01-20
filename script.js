var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.querySelector(".gradient");
var randombtn=document.querySelector(".random");
function changebackground(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
css.textContent = body.style.background + ";";
}
function changeinput(){
	color1.value=randomColor();
	color2.value=randomColor();
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
css.textContent = body.style.background + ";";

}
randombtn.addEventListener("click",changeinput);
color1.addEventListener("input",changebackground);
color2.addEventListener("input",changebackground);

