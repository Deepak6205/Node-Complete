// problem 2 write a function which calculates area of circle

function calculateAreaOfCircle(radius){
    return area = Math.PI*radius**2;
}
console.log(calculateAreaOfCircle(5));
console.log(calculateAreaOfCircle(10));

// problem3 callback function

function performOperation(num1,num2,mathOperation){
    return mathOperation(num1,num2);
}
function add(x,y){
    return x+y;
}
function sub(x,y){
    return x-y;
}
function mul(x,y){
    return x*y;
}
function div(x,y){
    return x/y;
}
console.log(performOperation(10,5,add));
console.log(performOperation(10,5,sub));
console.log(performOperation(10,5,mul));
console.log(performOperation(10,5,div));

// problem 4 using fs module

const fs = require('fs');
fs.readFile('notes.txt','utf8',(err,data)=>{
    if(err){
        console.log("error reading file:", err);
        return;
    }
    console.log(data);
});

//problem 5 : os module.

const os = require('os');
console.log('Total Memory: ', os.totalmem());
console.log('Free Memory: ',os.freemem());
console.log('platform ',os.platform());
console.log('Number of CPU cores: ',os.cpus().length);

// problem 6 : lodash Usage.
const _ = require('lodash');

function evenNumber(numbers){
    const even = _.filter(numbers,num => num % 2 === 0);
    return _.sumBy(even);

}
const numbers = [1,2,3,4,5,6,7,8,9,11,10,13,15];
console.log(evenNumber(numbers));