// variables using var;
// var a = 5;
// var b = 6;
// var ans = a+b;
// console.log("this is the begining of nodejs");
// console.log("answer :" + ans);

// variables using let;

// let a = 5;
// let b = 6;
// let ans = a+b;
// console.log("this is the begining of nodejs");
// console.log("answer :" + ans);

// using const :- so if you have used const once and then if you want to modify that const after some time some where else then it will not happen.bocz const variable is not editable although you can do this using var and let.eg:

// let a = 5;
// let b = 6;
// let ans = a+b;
// const name = "Deepak";

// console.log(name);
// console.log("this is the begining of nodejs");
// console.log("answer :" + ans);

// Arrays.
// let game = ['Cricket', 'FootBall', 'Hockey', 'kabbaddi', 32];

// game.push("rugbi");
// console.log(game);

// if else and for loop

// var hour = 5;
// if(hour < 12){
//     console.log("we are not allowed");
// }else{
//     console.log("we are allowed");
// }

//  var count = 10;
// for(var i = 0; i <= count; i++){
//     console.log(i);
// }


// object :- object basically stores in key value pairs.

// const person = {
//     name : "Deepak",
//     age : 24,
//     isStudent : false,
//     hobbies : ["travelling","swiming","content creation","writting"]
// };
// console.log(person.name);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies);

// filter function.
//q:- find the and which is less then eual to 18. -> so ye basically kya karega ki har element ko check karega i.e filter akrega fir ans dega.
//similarly iissi tarah ke question banao;

// const ages = [32,25,18,16,12,14,13,9,17];
// const result = ages.filter(checkAges);
// function checkAges(age){
//     return age <= 18
// }
// console.log(result);

//PROMPT
// using prompt we can take the input from the user.
var prompt = require('prompt-sync')();
const age = prompt("please enter your age:");
if(age < 18){
    console.log("you got a 20% discount");
}else{
    console.log("you got a 30% senior discount");
}
