// var number = 5; // oldest version var variables are global and can be accessed basically everywhere
// alert(number);

// let num = 10;
// num = 7;

// const pi = 3.14;
// pi = 5;

// Data types

// simple types
let number = 34;   // (integer = int)
let myName = 'Alex'; // = "Alex" = `Alex` single or double quotes or tilda. (string)
let bool = true;   // or false (boolean)
//modal = "some text" ; // if variable not pronouncement it will return NULL
//alert(a); // (null)
//let modal; // the variable is pronouncement but empty (undefined) 
// (Symbol) is a technical type of date
// (BigInt) > 2^53 the numbers who biger than 2^53

// object types
let obj = {
    dog: 'Puppey',
    cat: 'Murrr'
};

let arr = [1, 'str', false];
arr[0] = 2; // => [2, 'str', false]

// console.log(myName);
// console.log(4/0); // Infinity and -Infinity is a integer date type
// console.log('string' * 9 ); // NaN => Not a number, it is a integer date type
console.log(2 + 2  == 4 ); // for comparison we need to use the two equal symbols
console.log(2 + 2  === 4 ); // comparison with date type we need to use the two equal symbols
console.log(4 + '4'); // 4 + '4' => 44 An concatenation is an operator that adds a second value by first as a symbol.
let x = 5;
x ++; // => x = x + 1; or x += 1; increment
x --; // => x = x - 1; or x -= 1; increment
console.log(x);