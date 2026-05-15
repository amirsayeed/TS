type GenericArray<T> = Array<T>;

const friends: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

const rollNumbers: GenericArray<number> = [4,6,10];

const isEligibelList: GenericArray<boolean> = [true, false, true];

type User = {name: string, age: number};

const userList: GenericArray<User> = [
    {name: "Mr. X", age: 30},
    {name: "Mr. Y", age: 25},
    {name: "Mr. Z", age: 35}
];

type Coordinates<X,Y> = [X, Y];
const coordinates1: Coordinates<number, number> = [10,20];

const coordinates2: Coordinates<string, number> = ["Latitude", 40];