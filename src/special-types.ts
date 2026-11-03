// * top types
let helloWorld: any;
helloWorld = "Hello World";
helloWorld = 42;
helloWorld.length; // No error, but may cause runtime error if helloWorld is not a string

let message: unknown;
message = "Hi there!";
message = 100;
message = true;
//message.length; // Error: Object is of type 'unknown'.

// * core types
let isDone: boolean = false;
let name: string = "John Doe";
let identifier: unknown;
const num: number = 123;
identifier = num;

// * nullish types

interface User {
  name: string;
}
type LogedInUser = User | null;

const user: LogedInUser = null;

// * Unit type
const greet = () => {
  console.log("Hello, World!");
};
greet();

// * sub-type of unit type
const anotherGreet = (): undefined => {
  console.log("Hello, TypeScript!");
  return undefined;
};
const greetRes: void = anotherGreet();

// * bottom | never type

function throwError(msg: string): never {
  throw new Error(msg);
}
throwError("This is an error message");
