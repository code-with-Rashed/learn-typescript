const wrapInArray = <T>(value: T) => {
  return [value];
};

const stringArr = wrapInArray<string>("rashed");
const numberArr = wrapInArray(123);

numberArr.map((data) => data.toFixed(2));

interface User {
  name: string;
  age: number;
}

interface Blog {
  title: string;
  description: string;
}

interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  data: T;
}

type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;

const UserRes: UserResponse = {
  success: true,
  statusCode: 200,
  data: {
    name: "Rashed",
    age: 25,
  },
};

const blogRes: BlogResponse = {
  success: true,
  statusCode: 201,
  data: {
    title: "this is a title",
    description: "Hello World",
  },
};
