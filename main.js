var css = document.querySelector('h2');
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var body = document.getElementById('gradient');
function setGradient() {
	body.style.background = 'linear-gradient(to right, ' 
	+color1.value
	+', '
	+color2.value
	+ ')';
	
	css.textContent = body.style.background + ';';
}
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
























/*var first = prompt ("enter first number")
var second = prompt ("enter second number")
var multiply = Number(first) % Number(second)
alert("the sum is : " + multiply)*/
/*function multiply(a,b) {
	return a*b
}
multiply(2,4);*/
/*const multiply =(a,b) => a*b;
const cMultiply = (a) => (b) => a*b;
const multiplyBy10 = cMultiply(10);
var first = prompt('enter number')*/


