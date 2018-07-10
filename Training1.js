/* --First task--
var hashteg = '';
for(var count = 0; count < 7; count++) {
	console.log(hashteg + '#');
	hashteg += '#';
};
*/


/*  -- Second Task way 1 --
for(var number = 0; number < 101; number++) {
	if(number === 0) console.log(number);
	else {
		if(number % 3 === 0 && number % 5 !== 0) console.log('Fizz');
		else {
			if(number % 5 === 0 && number % 3 !== 0) {
				console.log('Buzz');
			}
			else {
				if(number % 5 === 0 && number % 3 === 0) {
					console.log("FizzBuzz");
				}
				else console.log(number);
			}
		}
	}		
}
*/
/* -- Second Task way 2 --
for(var number = 0; number < 101; number++) {
	if(number === 0) console.log(number);
	else {
		switch (number % 3) {
			case 0:
				if(number % 5 === 0) console.log('FizzBuzz');
				else console.log('Fizz');
				break;
			default:
				if(number % 5 === 0) console.log('Buzz');
				else console.log(number);
				break;
		}
	}	 
}
*/


/* -- Third Task --
var chess = ''
var size = 3;
for(var index = 0; index < size; index++) {
	if(index % 2 === 0) {
		for(var count = 0; count < size; count++) {
			if(count % 2 == 0) {
				chess += '#';
			}
			else chess += ' ';
		}
	}
	else {
		for(var count = 0; count < size; count++) {
			if(count % 2 == 0) {
				chess += ' ';
			}
			else chess += '#';
		}
	}
	chess += '\n';
}
console.log(chess);
*/