function add(a,b){
    return a+b;

}
var result = add(6,8);
console.log(result);

//arrow function

var add  = (a,b) =>{
    return a+b;

}
var result = add(452,635);
console.log(result);

// dicma script:-this is the upgraded version of js
// yaha agar single line ki code hai to to hume return statement likhne ki v jarurat nahi hai.

var add = (a, b) => a+b;
var res = add(235,25);
console.log(res);

//callback function


//1st way:-

function callBack(){
    console.log("here we are calling the callback function")
}
const add1 = function(a,b,callBack){
    var res = a+b;
    console.log(`result is: ${res}`);
    callBack();
}
add1(325,654,callBack);


//2nd way:-

const add2 = function(a,b,Deepak){
    console.log(`result: ${a+b}`);
    Deepak();
}
add2(23,77,function(){
    console.log('add completed');
})



//3rd way :-

const add3 = function(a,b,Deepak){
    console.log(`result: ${a+b}`);
    Deepak();
}
add3(253,147, () => console.log('add completed'));

