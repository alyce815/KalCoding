// treat string as list of chars
// convert each char into the integer value
// one-by-one from i=0, 
// if no[i] > no[i+1] add no[i] to sum
// else, subtract from total
// e.g. xix  == 10 - 1 + 10

function romanToDecimal(romanNumeralString){
	let sum = 0;
	let str = romanNumeralString;
	console.log(str);
	for (let i = 0 ; i < str.length; i++){
		let v1 = integerValue(str[i]);
		if (i+1 < str.length){
			let v2 = integerValue(str[parseInt(i)+1]);
			if (v1 >= v2)
				sum += v1;
			else{
				sum -= v1;
			}

		}
		else{
			sum += v1;
		}
	}
	return sum;
}


function integerValue(romanCharacter){
	if(romanCharacter == "I"){
		return 1;
	}
	else if(romanCharacter == "V"){
		return 5;
	}
	else if(romanCharacter == "X"){
		return 10;
	}
	else if(romanCharacter == "L"){
		return 50;
	}
	else if(romanCharacter == "C"){
		return 100;
	}
	else if(romanCharacter == "D"){
		return 500;
	}
	else if(romanCharacter == "M"){
		return 1000;
	}
}

let r = 'MLXXX'; //1080
console.log(romanToDecimal(r));

// this runs in linear time and space complexity