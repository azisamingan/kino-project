console.log('Hi!, This is my online shop!')

// we need an object:
// var tshirt , const tshirt key: value
let shirt = {
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


// our items on the shelf first item is normally 0, second item 1, third item 3:

let products = [ shirt, socks, shorts ]

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
addToBasket(shirt)


console.log('This is my basket:', basket);

// old way of writing a function:
function addToBasketOldWay (item) {
    basket.push(item)
}

addToBasketOldWay(shirt)

// function to calculate the sum of our products:
const calculateSum = (someBasket) => {
    let totalSum = 0
    // look through the basket and calculate the totalSum of the price
    for( product of someBasket ) {
        
        totalSum = totalSum + product.price
        
    }
    return '${totalSum} Euro'
}

let sumOfMyShopping = calculateSum(basket)

console.log('Amount to pay', sumOfMyShopping);

// console.log(window);
console.log(document);

//insert content:

let p = document.createElement('p')
p.innerText = sumOfMyShopping
//pick out the div with the class "checkout" and add the p-element we created:
document.querySelector('.checkout').append(p)

// Callback function for Event Listener function:
const addToCartOnClick = (event) => {
// find the object that is the item we clicked on:
let clickedItem = products.find(item => {
    return item.description == event.target.id
})
// we add the item to the basket array:
addToBasket(clickedItem)
// add the item to the page:
let listItem = document.createElement('li')
listItem.innerText = clickedItem.descriptiondocument.querySelector('.listOfItems').append(listItem)
}

// find the buttons:
let addToCartButtons = document.querySelectorAll('.products .btn')

addToCartButtons.forEach((button) => {
    button.addEventListener('click', (event) => addToCartOnClick (event))
})

// click on the Go to checkout button:
// And display the amount to pay

let checkoutButton = document.querySelector('.buy')

checkoutButton.addEventListener('click', () => displaySum())