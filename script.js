//generate a number between two numbers.

function getNumbersBtwn(x,y){
	var numbers = [];

	for(let i = x; i <= y; i++) {
		numbers.push(i);
	}
			return numbers;	
}


//shuffle array
function shuffle(arr){
	var currentIndex = arr.length, tempVal, randomIndex;

		while(0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
					tempVal = arr[currentIndex];
					arr[currentIndex] = arr[randomIndex];
					arr[randomIndex] = tempVal;
		}

			return arr;
}

var requiredNumbers = getNumbersBtwn(1,30);
var sortedNumbers = shuffle(requiredNumbers);

var yourNum = {
	numbers : sortedNumbers,
	results : [],
	numPicks : [],
	genRandomNum : function() {
			var numRandom;
		do{
			numRandom = Math.floor(Math.random() * (yourNum.numbers.length)) + 1;
		} while(yourNum.numPicks.indexOf(numRandom) !== -1);
				return yourNum.numPicks.push(numRandom);	
	}
}

var genResults = function(num) {
	var count = num;
		for(let i = 0; i < count; i++) {
			for(let j = 0; j < 6; j++) {
				if(yourNum.numPicks.length < 6){
					yourNum.numPicks.push(yourNum.numbers[yourNum.genRandomNum()]);


				}
			}
			yourNum.results[i] = yourNum.numPicks;
			yourNum.numPicks = [];
		}
		console.log("---------------NEW----------------");
		console.log(yourNum.results);
}
genResults(11);
