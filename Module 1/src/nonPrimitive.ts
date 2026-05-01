// array, object

let bazarList: string[] = ["rice", "oil", "salt", "sugar"];

let mixedArr: (string | number)[] = ['eggs', 12, "milk", 1, "sugar", 26];
mixedArr.push("flour");
mixedArr.push(5);

//tuple

let couple: [string, string] = ["Alice", "Bob"];
let coordinate: [number, number] = [10,14];

let nameAndAge: [string, number] = ["Charlie", 30];

let destination: [string, string, number] = ["Dhaka", "Chattogram", 6];

// reference type: object

const user: {
    readonly organization: string,
    firstName: string,
    middleName?: string,
    lastName: string,
    isMarried: boolean
} = {
    organization: "Be Fresh PLC",
    firstName: "Amir",
    // middleName: "Mohammad",
    lastName: "Sayeed",
    isMarried: false
}

console.log(user);