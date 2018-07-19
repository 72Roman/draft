// array reverse

function reverseArray(arr) {
	let copy = [];
	for(let i = 0; i < arr.length; i++) {
		copy[i] = arr[arr.length - i - 1]
	}
	return copy;
}
//console.log(reverseArray([1]));

function reverseArrayinPlace(arr) {
	let swap = 0;
	for(let i = 0; i < arr.length / 2; i++) {
		swap = arr[i];
		arr[i] = arr[arr.length - i - 1];
		arr[arr.length - i - 1] = swap;
	}
}
//let array = [0,1,3,3,3,3,3,1,1,1,2,2,3,4];
//reverseArrayinPlace(array);
//console.log(array);