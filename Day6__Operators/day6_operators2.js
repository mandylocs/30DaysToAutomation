/* Main Categories of Operators
 Use for calculations, test counts, or timing //Arithmetic Operators
 +, -, *, /, %, ** add, subtract, multiplication, division, remainder, exponent power*/

let totalTest = 25;
let passed = 22;
let successRate = (passed / totalTest) * 100;
console.log("Success Rate:" + successRate + "%"); // used to calculate metrics or pass rates

/* Assignment Operators- Used to assing and update varibale values
= Assigns a value - x = 10
+= Add and assign, - x += 1,
-= subtract and assign x -= 7, 
*= Multiply and assign x *= 6 
/= division and assign x /= 5, 
%= remainder and assign x %= 4
perfect for retry logic or keeping count of test attempts*/

let retryCount = 0;
retryCount += 1; //Add 1 on each retry
console.log("Retries:", retryCount);

/*Comparison Operators- Used in test assertions to compare expected vs actual results
 == Equal to, 
 === Strict equal to, 
 != Not equal to, 
 !== Strict not equal to, 
 > Greater than, < Less than, 
 >= Greater than or equal to, 
 <= Less than or equal to */

let expectedStatus = 200;
let actualStatus = 404;

if (expectedStatus === actualStatus) {
    console.log("✅ API test passed");
} else {
    console.log("❌ API test failed");
}

/* Logical Operators- Checks both must be true before continuing a test 
&& (AND), || (OR), ! (NOT) 
*/
let isLoggedIn = true;
let isAdmin = true;
if (isLoggedIn && isAdmin) {
    console.log("Access granted to admin panel");
} else {
    console.log("Access denied"); // useful for multi-factor authentication
}

let browser = "Chrome";
if (browser === "Chrome" || browser === "Firefox") {
    console.log("Supported browser");
} else {
    console.log("Unsupported browser"); //perfect for cross-browser testing
}

let isError = false;
if (!isError) {
    console.log("No errors detected");
} else {
    console.log("Errors found"); // useful for error handling, negates a condition, great for handling unexpected results
}

/*Nullish Coalescing - Used when a variable might be empty --perfect for fallback test data */
let username = null;
let finalName = "username";
let finalInput = username ?? finalName;
console.log("Input to use:", finalInput); // Outputs: "Input to use: username" // If username is null or undefined, use finalName
// useful for default values in tests

/*Ternary (?:) - One-line shortcut for if/else statements*/
let testResult = "Passed";
let message =
    testResult === "Passed" ? "🎉 Test succeeded!" : "❌ Test failed.";
console.log(message); // Outputs: "🎉 Test succeeded!" // useful for quick status messages based on conditions

/* You're writing a test for login functionality. You want the script to check: 
If credentials are valid, grant access; otherwise, deny access. 
If the dashboard loads successfully, display a welcome message; otherwise, show an error message. 
if the API returns a 200 status code, consider the request successful; otherwise, handle the error appropriately. */
let credentialsValid = true;
let dashboardLoaded = true;
let apiStatusCode = 200;

if (credentialsValid && dashboardLoaded && apiStatusCode === 200) {
    console.log("Access granted. Welcome to your dashboard!");
} else {
    console.log("Access denied or an error occurred.");
}
