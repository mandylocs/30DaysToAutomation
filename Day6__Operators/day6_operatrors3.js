/*Java Conditional  statements. Conditional statement let your code make decisions based on conditions. 
Just  like a manual tester decides what to do based on the results of a test, conditional statements allow your code to choose different paths of execution based on certain conditions.
Common conditional statements include if, else if, else, and switch statements. 
These statements evaluate boolean expressions (true or false) to determine which block of code to execute.
JavaScript supports several types of conditional statements, including:
1. if statement
2. else if statement
3. else statement
4. switch statement
*/
//if statement example
let testPassed = true;
if (testPassed) {
    console.log("Test passed successfully!");
}
//In QA automation, you might use an if statement to check if a test case has passed or failed and log the result accordingly.

//else if and else statement example: Adds an alternative path if the initial if condition is false.
let loginStatus = "failed";
if (loginStatus === "success") {
    console.log("Login successful!");
} else if (loginStatus === "failed") {
    console.log("Login failed. Please try again.");
} else {
    console.log("Unknown login status.");
}
//In QA automation, you might use else if and else statements to handle different outcomes of a test case, such as success, failure, or unexpected results.
//Another example
let responseTime = 350; // in milliseconds
if (responseTime < 200) {
    console.log("Response time is excellent.");
} else if (responseTime >= 200 && responseTime < 500) {
    console.log("Response time is acceptable.");
} else {
    console.log("Response time is poor.");
}

//switch statement example: Useful when you have multiple possible values for a single variable and want to execute different code blocks based on those values.
let dayOfWeek = "Monday";
switch (dayOfWeek) {
    case "Monday":
        console.log("It's Monday!");
        break;
    case "Tuesday":
        console.log("It's Tuesday!");
        break;
    default:
        console.log("It's some other day.");
}
//In QA automation, you might use a switch statement to handle different test scenarios based on the type of test being executed, such as unit tests, integration tests, or end-to-end tests.

//Another example: Used when you have many fixed pssible values for a variable. It's cleaner than multiple if-else statements.
let browser = "Safari";
switch (browser) {
    case "Chrome":
        console.log("Using Chrome browser.");
        break;
    case "Firefox":
        console.log("Using Firefox browser.");
        break;
    case "Safari":
        console.log("Using Safari browser.");
        break;
    default:
        console.log("Unknown browser.");
}
//In QA automation, you might use a switch statement to select different test configurations based on the browser being tested.
// You might also choose differnet test setups based on the environment (development, staging, production) using a switch statement.

//These conditional statements are essential for creating dynamic and responsive test scripts that can adapt to different scenarios and outcomes during automated testing.

//Ternary Operator Example: A shorthand way to write an if-else statement. It takes three operands: a condition, a result for true, and a result for false.
let isUserLoggedIn = false;
let accessMessage = isUserLoggedIn ? "Access granted." : "Access denied.";
console.log(accessMessage); // Outputs: "Access denied."
//In QA automation, you might use the ternary operator to quickly determine the outcome of a test case based on a condition, such as whether a user is logged in or not.
// In QA Automation, you could print quick status messages based on test results using the ternary operator.
//Another example
let score = 85;
let grade = score >= 60 ? "Pass" : "Fail";
console.log("Grade:", grade); // Outputs: "Grade: Pass"
//In QA automation, you might use the ternary operator to quickly determine if a test case has passed or failed based on a score or threshold.

//Mini QA Senario Using Conditional Statements
/* You're testing an API response based on different status codes. You want to log different messages based on the status code received.
If the status code is 200, log "Success: Data retrieved."
If the status code is 404, log "Error: Resource not found."
If the status code is 500, log "Error: Server error."
For any other status code, log "Error: Unexpected status code."
*/
let apiStatus = 404;
if (apiStatus === 200) {
    console.log("Success: Data retrieved.");
} else if (apiStatus === 404) {
    console.log("Error: Resource not found.");
} else if (apiStatus === 500) {
    console.log("Error: Server error.");
} else {
    console.log("Error: Unexpected status code.");
}
//In QA automation, you might use such conditional statements to handle different API responses and log appropriate messages based on the status codes received.

//This shows how test adjust behavior depending on the situation.

//Functional QA Scenario Using Conditional Statements
/*Login Test Validation with Conditionals: Let's say I am automating a Login Page test. 
The goal is to verify if:
1. The login button exists and is clickable.
2. The login is successful.
3. The correct dashboard page loads after login.
We'll simulate the logic using JavaScript conditional(like you would write inside Playwright, Cypress, or Selenium scripts).
*/
//Simulated Login Test Scenario
let loginButtonExists = true; //Element presence check
let loginButtonClickable = true; //Element clickable check
let loginSuccessful = true; //Login action result
let dashboardPageLoaded = false; //Dashboard load result(What loads after login)

//Conditional logic for the test
if (loginButtonExists) {
    console.log("Login button is present.");
} else {
    console.log("Login button is missing.");
    if (loginButtonClickable) {
        console.log("Login Button is clickable.");
    } else {
        console.log("Login button is not clickable.");
    }
    //Attempt to login only if button exists and is clickable
    if (loginSuccessful) {
        console.log("Login successful.");
        //Check if dashboard page loads after login
        if (dashboardPageLoaded) {
            console.log("Dashboard page loaded correctly.");
        } else {
            console.log("Error: Dashboard page did not load.");
        }
    } else if (!loginSuccessful) {
        console.log("Error: Login failed.");
    } else {
        console.log("Error: Login button is missing.");
    }
}
//This example demonstrates how conditional statements can be used in QA automation to validate different aspects of a login test scenario, ensuring that each step is verified before proceeding to the next.
//Step through what's happening at each conditional check.
//1. Check if the login button exists (loginButtonExists). You can't continue the test if the elemient is missng.
//2. If the button exists, attempt to log in (loginSuccessful). If login fails, log an error. This simulates checking API or UI login sucess.
//3. If login is successful, check if the dashboard page loads (dashboardPageLoaded). If it doesn't load, log an error.
//4. Add backup logic else if and else Handles edge cases like missing elements or failed actions, such as wrong page or missing button.
//This structured approach ensures that each critical step in the login process is validated, and appropriate messages are logged based on the outcomes of each condition.

// Note: An error in my test steps is the check for clickable state of the login button. In a real test, you'd want to verify that the button is not only present but also clickable before attempting to log in.
/*Don't assument the click, right now loginSuccesful is set independently of the button being clickable, so my test implicitly assumes the click happened and worked. In real automation the click is an action whose succes should be verfied. 
Recommendation: Adda boolean (e.g., loginButtonClickable) to check if the button is clickable before attempting login or assert the element is clickable via my framework. 
Attempt the click and derive loginSuccessful from the click/login result instad of pre-setting it. Fail early with a clear mess if the button is clickable*/

/*How it Relates to Real-World QA Automation
 In Playwright, Cypress, Selenium the conditional logic would look like this:
const pageTitle = await page.title();
if (pageTitle === "Dashboard") {
    console.log("Dashboard page loaded correctly.");
} else {
    console.log("Error: Dashboard page did not load.");
}
//This is a practical example of using conditional statements in a real-world QA automation script to validate page loads and log results accordingly.
//Overall, conditional statements are fundamental in QA automation for making decisions based on test outcomes, element states, and application behavior.
// or for element presence, visibility, and interaction states.
if (await page.isVisible("#loginButton")) {
    await page.click("#loginButton");
} else {
    console.log("Login button is not visible.");
}

*/

//Mini Practice Exercise
/*Simulate an eCommerce checkout test using conditional statements
If cart has items, proceed to checkout. 
If payment succeeds, confirm order
Else, log an error message. */
let cartHasItems = 6; // Simulate cart status
let paymentSuccessful = false; // Simulate payment status

if (cartHasItems) {
    console.log("Proceeding to checkout...");
    if (paymentSuccessful) {
        console.log("Order confirmed!");
    } else {
        console.log("Error: Payment failed.");
    }
} else {
    console.log("Error: Cart is empty.");
}
