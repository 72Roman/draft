// EloquentJavascript, data structure
// Sum of a range

function range(first, last) {
	let arr = [];
	let cur = first;
	for(let i = 0; i <= last - first; i++) {
		arr[i] = cur;
		cur++;
	}
	return arr; 
}

function sum(arr) {
	let total = 0;
	for(let i = 0; i < arr.length; i++) 
		total += arr[i];
	return total; 
}


function recRange(first, last) {
	let arr = [];
	function rec(first, last) {
		if(last !== first) rec(first, last - 1);
		arr.push(last);
	}
	rec(first, last);
	return arr;
}

function recSum(arr) {
	function rec(index) {
		if(index === -1) return 0;
		return arr[index] + rec(index - 1);
	}
	return rec(arr.length - 1);
}
//console.log(range(0,0));
// console.log(sum(range(1,10)));
//console.log(recRange(1,1));
console.log(recSum(recRange(1,10)));