//PROBLEM 1- CREATING SERVER.

const express = require('express');
//const app = express(); uncomment it for first problem and comment the last one vice versa.
app.get('/', (req,res)=>{
    res.send('Hello from Express server!');
});
app.listen(3000, () =>{
    console.log('server is running on port 3000');
});

// PROBLEM 5- JSON PARSING AND OBJECT CONVERSION.

const jsonData = '{"product": "laptop", "price": 59999.99}';
const parsedObject = JSON.parse(jsonData);
console.log(parsedObject.product);

const objectToConvert = {"name":"deepak","age": 25};
const jsonString = JSON.stringify(objectToConvert);
console.log(jsonString);

// PROBLEM 6 - BUILDNG BASIC API'S

 const express = require('express');
 const app = express();
app.get('/weather',(req,res) => {
    const weatherData = {
        temp: 25,
        conditions: 'sunny',
        city:'dhanbad'
    };
    res.json(weatherData);
});
app.listen(3001,()=>{
    console.log('server is running on port 3000');
})