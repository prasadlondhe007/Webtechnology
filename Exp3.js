//different bet arrow fun and simple function
//this keyword why we use this key word simple fun and arrow fun
//write a code for arrow fun wit 2 example
//write a code for switch case
//how to use truthy and falsey value in js
//write a code for how to use loops in arrays
//diff bet for in and for out
//how to use filter and map fun in js
//how to use reduce method in js
/*******************************************************
Activity 1:
Difference Between Simple Function and Arrow Function
********************************************************/

// Simple Function
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Prasad"));

//  Arrow Function
const greetArrow = (name) => {
    return "Hello " + name;
};

console.log(greetArrow("Prasad"));

/*
Difference:
1. Simple function has its own "this"
2. Arrow function does NOT have its own "this"
3. Arrow function is shorter syntax
*/



/*******************************************************
Activity 2:
this keyword in Simple Function vs Arrow Function
********************************************************/

// Simple Function
const person1 = {
    name: "Prasad",
    showName: function() {
        console.log("Simple Function this:", this.name);
    }
};

person1.showName(); // Works properly


// Arrow Function
const person2 = {
    name: "Prasad",
    showName: () => {
        console.log("Arrow Function this:", this.name);
    }
};

person2.showName(); 
/*
Arrow function does NOT bind its own this.
It takes this from parent (global scope).
*/



/*******************************************************
Activity 3:
Arrow Function – 2 Examples
********************************************************/

// Example 1
const add = (a, b) => a + b;
console.log("Addition:", add(10, 5));

// Example 2
const square = (num) => num * num;
console.log("Square:", square(4));



/*******************************************************
Activity 4:
Switch Case Example
********************************************************/

let day = 3;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid Day");
}



/*******************************************************
Activity 5:
Truthy and Falsy Values
********************************************************/

let value = "";

if(value) {
    console.log("Truthy Value");
} else {
    console.log("Falsy Value");
}

/*
Falsy values:
false
0
""
null
undefined
NaN

Everything else is Truthy
*/



/*******************************************************
Activity 6:
Loops in Arrays
********************************************************/

let numbers = [10, 20, 30, 40];

// Using for loop
for(let i = 0; i < numbers.length; i++) {
    console.log("For Loop:", numbers[i]);
}

// Using forEach
numbers.forEach(function(num) {
    console.log("forEach:", num);
});



/*******************************************************
Activity 7:
Difference Between for...in and for...of
********************************************************/

let arr = [100, 200, 300];

// for...in → gives index
for(let index in arr) {
    console.log("for...in index:", index);
}

// for...of → gives value
for(let value of arr) {
    console.log("for...of value:", value);
}



/*******************************************************
Activity 8:
map() and filter()
********************************************************/

let nums = [1, 2, 3, 4, 5];

// map → modify each element
let doubled = nums.map(num => num * 2);
console.log("Map Result:", doubled);

// filter → condition check
let evenNumbers = nums.filter(num => num % 2 === 0);
console.log("Filter Result:", evenNumbers);



/*******************************************************
Activity 9:
reduce() Method
********************************************************/

let arrNumbers = [1, 2, 3, 4];

// reduce → reduce array to single value
let total = arrNumbers.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log("Reduce Sum:", total);