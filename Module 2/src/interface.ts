type User = {
    name: string;
    age: number;
}

interface IUser{
    name: string;
    age: number;
}

type Role = {
    role: "admin" | "user";
}

type UserWithRole = User & Role;

interface IUserWithRole extends IUser{
    role: 'admin' | 'user';
}

const user1: IUserWithRole = {
    name: "Sayeed",
    age: 28,
    role: "admin"
}

const user2: IUser = {
    name: "Mr. X",
    age: 40
}

type IsAdmin = boolean;
const isAdmin: IsAdmin = true;

// function
type Add = (a: number, b: number) => number;

interface IAdd {
    (a: number, b: number): number;
}

const add: IAdd = (num1, num2) => num1+ num2;

type Friends = string[];

interface IFriends {
    [index: number]: string;
}

const friends: IFriends = ["Alice", "Bob", "Charlie"];