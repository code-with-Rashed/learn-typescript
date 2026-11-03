// Literal type
type Status = "pending";
const status: Status = "pending";

// Union type
type Result = "success" | "failure";
const result: Result = "success";
const anotherResult: Result = "failure";

type Identity = string | number;
const id: Identity = 123;
const anotherId: Identity = "abc";

// Literal Union type
type Direction = "up" | "down" | "left" | "right";
const upDirection: Direction = "up";
const downDirection: Direction = "down";

type Role = "admin" | "user" | "guest";
const adminRole: Role = "admin";
const userRole: Role = "user";
const guestRole: Role = "guest";

// object union type
type Admin = { id: number; role: "admin"; privileges: string[] };
type Member = { id: number; role: "member"; plan: string[] };
type User = Admin | Member;
const admin: User = { id: 1, role: "admin", privileges: ["read", "write"] };
const member: User = { id: 1, role: "member", plan: ["basic"] };
