// this is the file where we learn that how to see our system details.

var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);
console.log(user.username);
fs.appendFile('greeting.txt', 'hi ' + user.username + '\n',()=>{
    console.log('file is created!');
});

console.log(os);


// IMPORT EXPORT WITH NOTES.JS and NODE.JS

const notes = require('./notes.js');
var _ = require('lodash');


console.log('server file is available!');
var age = notes.age;

var result = notes.addNumber(age,7);
console.log(result);
console.log(age);


var data = ['person','person',1,2,1,2,'name','age','2'];
var filter = _.uniq(data);
console.log(filter);