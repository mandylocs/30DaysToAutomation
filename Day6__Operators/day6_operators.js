let loginAttempts = 6;
const maxAttempts = 3;

if (loginAttempts < maxAttempts) {
    console.log("Try again!");
} else {
    console.log("Account Locked.");
}

const expectedTitle = "Dashboard";
let actualTitle = "Dashboard";

if (actualTitle === expectedTitle) {
    console.log("test passed!");
} else {
    console.log("test failed!");
}

let testResults = "passed";

switch (testResults) {
    case "passed":
        console.log("All test passed");
        break;
    case "failed":
        console.log("Some test failed.");
        break;
    default:
        console.log("Unknown test results.");
}
