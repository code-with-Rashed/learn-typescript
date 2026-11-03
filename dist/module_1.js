// Type safe function to add two numbers
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
console.log(add(500, 10));
// Array, Tuple and Readonly Modifiers
const arr = ["Hello", "World"];
arr.push("TypeScript");
const num = [1, 2, 3];
const dhakaLatLong = [23.8103, 90.4125];
// Optional, Default and Rest Parameters (...args)
const concatName = (firstName, lastName) => {
    if (!lastName) {
        return firstName;
    }
    return firstName + " " + lastName;
};
console.log(concatName("Rashed"));
console.log(concatName("Rashed", "Alam"));
const greeting = (name, greet = "Hello") => {
    console.log(`${greet} ${name}`);
};
greeting("Rashed");
const sum = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
};
sum(1, 2, 3, 4, 5);
const logUserDetails = (...details) => {
    const [name, age, isActive] = details;
    console.log(`Name: ${name}, Age: ${age}, isActive: ${isActive}`);
};
logUserDetails("Rashed", 25, true);
const user = {
    name: "Rashed",
    age: 25,
    isActive: true,
    address: {
        street: "123 Main St",
        city: "Dhaka",
    },
};
const laptop = {
    name: "Dell XPS 13",
    price: 1200,
};
export {};
