// * Type assertion
// * "as" syntex
const someStatus = "success";
function handleResponse(status) {
    console.log("Handling response with status:", status);
}
handleResponse(someStatus); // Type assertion using "as" syntax
const userProfile = {
    name: "Alice",
    phoneNumber: "123-456-7890",
};
const phoneNumber = userProfile.phoneNumber; // Non-null assertion
const anotherPhoneNumber = userProfile.phoneNumber; // Type assertion using "as" syntax
// * constant assertion
const config = {
    apiUrl: "https://api.example.com",
    port: 8080,
};
export {};
//config.port = 3000; // This is not allowed because config is a constant assertion
