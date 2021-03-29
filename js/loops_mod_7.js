// for of loop - the following two only work on arrays:

let week = ['Monday', 'Tuesday', 'Wednesday', 1, 2, 3]

let people = ['Ann', 'Bert', 'Claus', 'David', 'Emma']

for (item of week) {
    console.log(item);
}

for (person of people) {
    console.log(person);
}

// for Each is a Method
week.forEach(day => {
    console.log(day);
})

// more general loop i.e. for loop - this example on calling many times:

for (let i = 0; i >= 10; i--){
    // console.log(week[i]);
    // console.log('index', i);
}

// old skool JS language:
var myVariable = 'some text';
// new: let or const

//older function:
function myFunction (){
    return 'Hi! I\'m old,'
}

const myNewFunction = (firstParam, secondParam, x) => {
    console.log(firstParam);
    // return 'Hi! I\'m modern! ${firstParam} more text'
    let aDemo = '1234'
    return 'Hi! I\'m modern!' + firstParam + 'more text'
}

// return means we want the function to do something and to give back, we want a value
let result = myNewFunction(10,10,30)
console.log(result);

// what is the sum of these numbers?
let myNumbers = [30, 40, 55, 90]
let myLuckyNumbers = [3, 7, 11, 15, 21, 33]

// method sum?
// arrow function
// loop

// I need to look through the array and add each number to the next 
let sum = 0
for (number of myNumbers) {
    // sum = sum + number
    // shorter way of writing
    sum += number
    console.log(sum);
}

// console.log(sum);
const calculateSum = (anArray) => {
    let sum = 0;
    for (number of anArray) {
        sum += number
    }
    return sum
}

let resultMyNumber = calculateSum(myNumbers)
console.log(resultMyNumber);
console.log(calculateSum(myNumbers));
console.log(calculateSum(myLuckyNumbers));