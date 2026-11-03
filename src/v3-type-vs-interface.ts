// * type alias vs interface

// ? Interface is generally connected to objects
// ? Type alias is more connected to literals, unions and primitives

type Id = number;

//! interface Id = number;

type Role = "admin" | "user";

// ! interface Role = "admin" | "user";

interface User {
  id: Id;
  name: string;
  role: Role;
}

const user: User = {
  id: 1,
  name: "John Doe",
  role: "admin",
};

//Todo: Interface

interface Animal {
  species: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  species: "Canine",
  breed: "Labrador",
};

const cat: Animal & Dog = {
  species: "Feline",
  breed: "Siamese",
};

interface Employee {
  name: string;
}
interface Employee {
  age: number;
}

const employee: Employee = {
  name: "John",
  age: 30,
};

// Todo: Type Alias

type Vehicle = {
  brand: string;
};

type Car = Vehicle & {
  name: string;
};

const car: Car = {
  name: "Toyota",
  brand: "Toyota",
};

