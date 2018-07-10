/* --Minimum--
var findMin = function(a, b) {
	return (a > b?b : a);
}
console.log(findMin(0,1));
*/

/* --Recursion--
var isEven = function(num) {
	if(num === 0) return true;
	if(num === 1) return false;
	if(num < 0) return null;
	return isEven(num - 1);
}

console.log(isEven(-1));
*/

/*  drunk Count Bs

var drunkCountChar = function(symbol, str) {
	return function() {
		let count = 0;
		for(let index = 0; index < str.length; index++) {
			if(str.charAt(index) === symbol) count++;
		}
		return count;
	}
}
*/
/* Count Bs

var countChar = function(symbol, str) {
	let count = 0;
	for(let i = 0; i < str.length; i++) {
		if(str.charAt(i) === symbol) count++;
	}
	return count;
}

console.log(countChar('s','ssss'));
*/