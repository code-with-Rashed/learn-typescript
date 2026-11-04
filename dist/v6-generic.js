const wrapInArray = (value) => {
    return [value];
};
const stringArr = wrapInArray("rashed");
const numberArr = wrapInArray(123);
numberArr.map((data) => data.toFixed(2));
const UserRes = {
    success: true,
    statusCode: 200,
    data: {
        name: "Rashed",
        age: 25,
    },
};
const blogRes = {
    success: true,
    statusCode: 201,
    data: {
        title: "this is a title",
        description: "Hello World",
    },
};
export {};
