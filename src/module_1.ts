// Type safe function to add two numbers
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 10));
console.log(add(500, 10));

// Array, Tuple and Readonly Modifiers
const arr: string[] = ["Hello", "World"];
arr.push("TypeScript");

const num: number[] = [1, 2, 3];

const dhakaLatLong: readonly [number, number] = [23.8103, 90.4125];

// Optional, Default and Rest Parameters (...args)

const concatName = (firstName: string, lastName?: string): string => {
  if (!lastName) {
    return firstName;
  }
  return firstName + " " + lastName;
};
console.log(concatName("Rashed"));
console.log(concatName("Rashed", "Alam"));

const greeting = (name: string, greet: string = "Hello") => {
  console.log(`${greet} ${name}`);
};
greeting("Rashed");

const sum = (...numbers: number[]): number => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};
sum(1, 2, 3, 4, 5);

const logUserDetails = (
  ...details: [name: string, age: number, isActive: boolean]
): void => {
  const [name, age, isActive] = details;
  console.log(`Name: ${name}, Age: ${age}, isActive: ${isActive}`);
};
logUserDetails("Rashed", 25, true);

// Object type, Type alias and Interface
type Address = {
  street: string;
  city: string;
};
type User = {
  name: string;
  age: number;
  isActive: boolean;
  address: Address;
};

const user: User = {
  name: "Rashed",
  age: 25,
  isActive: true,
  address: {
    street: "123 Main St",
    city: "Dhaka",
  },
};

interface Product {
  name: string;
  price: number;
}

const laptop: Product = {
  name: "Dell XPS 13",
  price: 1200,
};