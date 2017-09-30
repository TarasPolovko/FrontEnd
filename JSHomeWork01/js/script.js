function powANumber (a, b) {
	var result = 1;

	for (var i = 0; i < b; i++) {
		result *= a;
	}

	return result;
}

var a = prompt("Please, enter the number which you'dlike to pow");
console.log("a = ", a);
var b = prompt("Please, enter the pow number");
console.log("b = ", b);

var result = powANumber(a, b);

console.log( 'result = ', result );