// Repetition

// Objects description on left hand side is "key", descrption on right hand side is "value":
let shoes = {
    color: 'brown',
    size: 40
}

console.log('The shoes are ${shoes.color} and the size is ${shoes.size}')
console.log("The shoes are" + shoes.color)

// Array first item is always "0" then "1", "2", etc:
let week = ['monday', 'tuesday']

week[0]

week.push('friday')

console.log(week)

let firstName = 'Ann'

firstName = 'Berta'

// block see line 49-52:


let today = 'monday'

if(today == 'monday'){
    const hour = '6 p.m'
    console.log('Today is', today, hour);
}

// Funtion - first you declare it then you call it:
function myOldFunc (name, age) {
    console.log('hi ${name}, ${age}');
}
// "calling" the function using strings i.e. text or if you pass a number you don't use quotation marks:
myOldFunc('Don', 30)
myOldFunc(firstName)
myOldFunc(1234)

//Arrow (the "new" way):
const myNewFunc = (name) => {
    console.log('Hello ${name}');
}

week.forEach(day => {
    var test = 'hi';
    console.log(test);
})