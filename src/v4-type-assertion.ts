// * Type assertion
// * "as" syntex

type Status = "success" | "error";
const someStatus: string = "success";
function handleResponse(status: Status) {
  console.log("Handling response with status:", status);
}
handleResponse(someStatus as Status); // Type assertion using "as" syntax

// * non-null assertion
type UserProfile = {
  name: string;
  phoneNumber?: string;
};
const userProfile: UserProfile = {
  name: "Alice",
  phoneNumber: "123-456-7890",
};

const phoneNumber: string = userProfile.phoneNumber!; // Non-null assertion
const anotherPhoneNumber: string = userProfile.phoneNumber as string; // Type assertion using "as" syntax

// * constant assertion
const config = {
  apiUrl: "https://api.example.com",
  port: 8080,
} as const;

//config.port = 3000; // This is not allowed because config is a constant assertion
