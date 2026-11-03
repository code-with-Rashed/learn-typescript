// * top types
let helloWorld;
helloWorld = "Hello World";
helloWorld = 42;
helloWorld.length; // No error, but may cause runtime error if helloWorld is not a string
let message;
message = "Hi there!";
message = 100;
message = true;
//message.length; // Error: Object is of type 'unknown'.
// * core types
let isDone = false;
let name = "John Doe";
let identifier;
const num = 123;
identifier = num;
const user = null;
// * Unit type
const greet = () => {
    console.log("Hello, World!");
};
greet();
// * sub-type of unit type
const anotherGreet = () => {
    console.log("Hello, TypeScript!");
    return undefined;
};
const greetRes = anotherGreet();
// * bottom | never type
function throwError(msg) {
    throw new Error(msg);
}
throwError("This is an error message");
export {};
