// array reverse

function reverseArray(arr) {
	let copy = [];
	for(let i = 0; i < arr.length; i++) {
		copy[i] = arr[arr.length - i - 1]
	}
	return copy;
}
console.log(reverseArray([1]));


//function reverseArrayinPlace(arr)