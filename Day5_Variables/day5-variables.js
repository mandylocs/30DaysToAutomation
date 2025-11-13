//Test user credentials - strings
let username = "testUser123";
let password = "SecurePass456";
let email = "test@automation.com";

//Test counters - numbers
let loginAttempts = 0;
let testsPassed = 5;
let testFailed = 2;

//Test status - boolean
let isLoginIn = false;
let testComplete = true;
let debugMode = false;

console.log("===Test Automation ===");
console.log("Username:", username);
console.log("Email:", email);
console.log("Login Attempts", loginAttempts);
console.log("Test Passed:", testsPassed);
console.log("User Logged in:", isLoginIn);
console.log("Test complete:", testComplete);

// //Undefined- declared but not assigned
// let x;
// console.log();
// console.log(x); //undefined

// //Null - intentional empty value
// let y = null;
// console.log(y); //null

// // NaN- Invalid number operation
// let notANumber = 0 / 0;
// console.log(notANumber); //Nan

// // Object - key-value pairs
// let person = { name: "Tony", age: 30 };
// console.log(person.name); //Tony

// // Array- ordered list
// let numbers = [1, 2, 3];
// console.log(numbers[0]); //1

// // Symbol- unique identifier
// let id = Symbol("id");
// console.log(id); //Symbol(id)

// // BigInt - Large interger
// let bigNum = 900736462899388n;
// console.log(bigNum); // 900736462899388n

//const for values that never change in your tests
const websiteURL = "https://testamplify.com";
const maxRetries = 3;
const testTimeout = 30000;

//let for values that change during test execution
let currentPage = "login";
let testResults = [];
let errorCount = 0;

//This would cause an error:
//websiteURL = 'https://different.com'; //Error!

//But this works fine:
currentPage = "dashboard";
errorCount = errorCount + 1;

console.log("Website URL:", websiteURL);
console.log("Current Page:", currentPage);
console.log("Error Count:", errorCount);
