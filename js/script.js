console.log('Hi!, This is my online shop!')

// we need an object:
// var tshirt , const tshirt key: value
let tshirt = {
    color: 'red with blue dots',
    price: 25,
    size: 'xl',
    material: 'cotton'
}

let socks = {
    color: 'green',
    price: 5,
    size: '39',
    material: 'nylon'
}

let shorts = {
    color: 'yellow',
    length: 'short',
    price: 50,
    availableSizes: ['s', 'm', 'l', 'xl'],
    material: 'linen'
}

console.log(tshirt, socks)

// our items on the shelf first item is normally 0, second item 1, third item 3:

let products = [ tshirt, socks, shorts ]

console.log(products);

let basket = []
console.log('This is my empty basket:', basket);

// put an item in the basket:
basket.push(socks)
basket.push(shorts)


// Functions:
// define the arrow function:
const addToBasket = (item) => {
    // here we do something:
    basket.push(item)
}

// here we call the function:
addToBasket(tshirt)
addToBasket(tshirt)
addToBasket(tshirt)
addToBasket(socks)
addToBasket(socks)

console.log('This is my basket:', basket);

// old way of writing a function:
function addToBasketOldWay (item) {
    basket.push(item)
}

addToBasketOldWay(tshirt)

// function to calculate the sum of our products:
const calculateSum = (someBasket) => {
    let totalSum = 0
    // look through the basket and calculate the totalSum of the price
    for( product of someBasket ) {
        console.log('in the loop', product);
        totalSum = totalSum + product.price
        console.log('in the loop', totalSum);
    }
    return totalSum
}

let sumOfMyShopping = calculateSum(basket)

console.log('Amount to pay', sumOfMyShopping);
