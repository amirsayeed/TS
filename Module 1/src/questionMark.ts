// ? : ternary operator

const isAdult = (age: number): string => 
{
    const result = age >= 18 ? "You are an adult." : "You are a minor.";
    console.log(result);
    return result;
}

// isAdult(24);

// nullish coalescing operator

const userTheme = undefined;

const selectedTheme = userTheme ?? "Light Theme";

console.log(selectedTheme);

const isAuthenticated = null;

const resultwithTernary = isAuthenticated ? "User is authenticated." : "User is not authenticated.";

console.log(resultwithTernary);

const resultWithNullish = isAuthenticated ?? "User authentication status is unknown.";

console.log(resultWithNullish);

// optional chaining operator
 const userProfile = {
    name: "Sayeed",
    address: {          
        city: "Dhaka",
        country: "Bangladesh"
    }
 }      

    console.log(userProfile?.address?.city); // Output: "Dhaka"