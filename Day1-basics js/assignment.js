// problem 1. conditional statement(if-else)

var prompt = require('prompt-sync')();
const age = prompt("please enter your age:");
if(age < 18){
    console.log("You get a 20% discount!");
}else if(age >= 18 && age < 65){
    console.log("Normal ticket price applies.")
}else if(age >= 65){
    console.log("You get a 30% senior discount!");
}

// problem 2. - variables (var and const);

var prompt = require('prompt-sync')();
const length = parseFloat(prompt("Enter length :"));
const width = parseFloat(prompt("Enter width :"));
const area = (length*width);
console.log('area of the rectangle = ', area);

// problem 3- Objects and properties

const product1 = {
    name: "shoes",
    price : 3000,
    inStock : true
};
const product2 = {
    name: "shirt",
    price : 699.99,
    inStock : false
};
const product3 = {
    name: "bags",
    price : 1256,
    inStock : true
};
console.log(product1);
console.log(product2);
console.log(product3);

// problem 4 - Arrays

var prompt = require('prompt-sync')();
const guessList = ['Sonu','Deepak','Rahul','Prince','Vishal'];
const nameToCheck = prompt('Enter your name: ');
if(guessList.includes(nameToCheck)){
    console.log(`Welcome to the party, ${nameToCheck}!`);
}else{
    console.log("Sorry you are not in the guesr list.");
}

// problem 5 - JSON (JavaScript object Notation)

const weatherForecast = {
    date: "2024-05-31",
    temperature: 28,
    conditions: "Sunny",
    humidity: 60
};

console.log("Weather Forecast for", weatherForecast.date);
console.log("Temperature:", weatherForecast.temperature + "°C");
console.log("Conditions:", weatherForecast.conditions);
console.log("Humidity:", weatherForecast.humidity + "%");
