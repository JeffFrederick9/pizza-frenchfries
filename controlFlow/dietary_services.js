let userRole = "Subscriber";
let accessLevel;
if (userRole === "Employee") {
    accessLevel = "You are authorized to have access to 'Dietary Services'";
} 
else if (userRole === "Enrolled Member") {
    accessLevel = "You are authorized to have access to 'Dietary Services' and one-on-one interaction with a dietician";
} 
else if (userRole === "Subscriber") {
    accessLevel = "You are authorized to have partial access to facilitate 'Dietary Services' only";
}
    else {
    accessLevel = "You must enroll or at least subscribe first to avail this facility";
}
console.log("Access Level:", accessLevel);

let isLoggedIn = true; 
let userMessage;
if (isLoggedIn) {
    if (userRole === "Employee") {
        userMessage = "Welcome, Employee!";
    }
    if (userRole === "Enrolled Member") {
        userMessage = "Welcome, Enrolled Member!";
    }
    if (userRole === "Subscriber") {
        userMessage = "Welcome, Subscriber!";
    } 
    else (userMessage = "Please click to create an account")
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);

let userType = "Special";
let userCategory;
switch (userType) {
    case "Charter":
        userCategory = "Charter Member";
        break;
    case "Special":
        userCategory = "Special Member";
        break;
    case "2nd":
        userCategory = "Second Class Citizen";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);