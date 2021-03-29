// Add content p, h2, to the div with the class dinner?

let dinnerDiv = document.querySelector('.dinner')

let content = document.createElement('div')
let guest = "Berta"
content.innerHTML = (
    `<h2> Hi ${guest}. Here is your dinner:</h2>
    <p> Enjoy! </p>
    `
)

dinnerDiv.append(content)

/** Use an API
 * THREE DIFFERENT WAYS OF WRITING A REQUEST: 
 * ajax - request NATHALIE DOESN'T USE THIS
 * fetch (browser fetch) FOR SMALLER PROJECTS
 * axios FOR BIGGER PROJECTS
 * API calls are asynchronous i.e. one step to the next step
 * 3 Options to wait for asynchronous code:
 * - Callback
 * - Promises (then, catch)
 * - async await
*/

const getMeal = async () => {
    // get some date from Meals.db - API
let myData = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    // inspect the data
// console.log(myData)
// we need to change format of the data "parsed = theActualObject":
let theActualObject = await myData.json()
console.log(theActualObject);
    // pick out the parts we want;

    let myMeal = theActualObject.meals[0]
    console.log(myMeal);
    // add parts to our page
    let mealDisplay = document.createElement('div')
    mealDisplay.innerHTML= (`
    <img src="${myMeal.strMealThumb}" style="height: 100px">
    <h5>${myMeal.strMeal}</h5>
    <p> ${myMeal.strCategory}</p>
    `)
    dinnerDiv.append(mealDisplay)
}


// Call the function on a click of a button:

let mealButton = document.querySelector('#meals')

mealButton.addEventListener('click', getMeal)