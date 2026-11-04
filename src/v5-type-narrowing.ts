// * typeof
const data = [1, 2];
console.log(typeof data === "object"); // true

// * type guard
const printValue = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toFixed(2);
  }
};
printValue("hello"); // "HELLO"
printValue(3.14159); // "3.14"

// * truthiness

type User = {
  name: string;
  address?: {
    street: string;
  };
} | null;

const LoggedInUser: User = {
  name: "John Doe",
  address: {
    street: "123 Main St",
  },
};

const printUserAddress = (user: User) => {
  if (user && user.address) {
    console.log(user.address.street);
    return;
  }
  throw new Error("User is not loggedin");
};

printUserAddress(LoggedInUser);

// * some caveat of type guard

const printAll = (value: string | string[] | null) => {
  if (value && typeof value === "object") {
    for (let x of value) {
      console.log(value);
    }
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log("");
  }
};
printAll(null);

// * Equality
const compare = (x: string | number, y: number | boolean) => {
  if (x === y) {
    console.log(x.toFixed(2));
    console.log(y.toLocaleString());
  }
};

const allPrint = (value: string | string[] | null) => {
  if (value !== null) {
    if (typeof value === "object") {
      if (typeof value !== "string") {
        for (let str of value) {
          console.log(value);
        }
        return;
      }
    }
    console.log(value);
    return;
  }
  console.log("");
};
allPrint(null);
allPrint("abcd");
allPrint(["a", "b"]);

// * "in" operator
type Bird = { fly: () => void };
type Fish = { swim: () => void };

const move = (animal: Bird | Fish) => {
  if ("fly" in animal) {
    animal.fly();
    return;
  }
  animal.swim();
};

// * "instanceof" check
const date = new Date();
const err = new Error();
console.log(date instanceof Date);
console.log(err instanceof Error);

const showDate = (value: Date | string) => {
  if (value instanceof Date) {
    console.log(value.toISOString());
    return;
  }
  console.log(value.toUpperCase());
};

// * Discriminated union
interface Circle {
  kind: "circle";
  redius: number;
}
interface Square {
  kind: "square";
  sideLength: number;
}

const getArea = (shape: Circle | Square) => {
  if (shape.kind === "circle") {
    console.log(shape.redius);
  } else {
    console.log(shape.sideLength);
  }
};
