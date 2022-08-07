/*const firstNumber = 32;
const secondNumber = 9;
const thirdNumber = 14;
const fourthNumber = 33;
const fifthNumber = 48;
const powerBall = 5;

function logWinningNumbers(first, second, third, fourth, fifth, power) {
  console.log('Winning numbers:', first, second, third, fourth, fifth, power);
}

logWinningNumbers(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, powerBall);


['This', 'is', 'an', 'array', 'of', 'strings.'];

// => ["This", "is", "an", "array", "of", "strings."] 

['Hello, world!', 42, null, NaN];




const myArray = ['This', 'array', 'has', 5, 'elements'];

console.log(myArray.length);
*/
/*
const winningNumbers = [32, 9, 14, 33, 48, 5];
function logWinningNumbers(numbers) {
  console.log('Winning numbers:', numbers);
}

logWinningNumbers(winningNumbers);

console.log(winningNumbers[0]);
console.log(winningNumbers[4]);


let a = [["a", "b"], [1, 2]]



a[0][1] = 8;

console.log(a)*/

/*function add5(num) {
  num = false;
  console.log(num);
}

var x = true; //primitive type primitive boolean undefine null and ""
add5(x);
console.log(x);*/


/*function append5(arr) {
  var arr2 = arr;
  arr2[1] = 100;
  console.log(arr2);
  console.log(arr);
}

var x = [1, 2, 3, 4] // arrary object is mutable
append5(x);
console.log(x);*/


var x = [1, 2, 3, 4]
/*var y = x.slice()*/
var y = [...x] // copy x to a new array / copier clone
y[3] = "heelo"
console.log(x)
console.log(y)
















