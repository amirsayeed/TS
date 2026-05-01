type User = {
    id:number, 
    name: {
        firstName: string,
        lastName: string
    },
    gender: "male" | "female",
    contactNo: string,
    address: {
        division: string,
        city: string
    }
}
    
const user1: User = {
        id: 124,
        name: {
            firstName: "Amir",
            lastName: "Sayeed"
        },
        gender: "male",
        contactNo: "+8801XXXXXXXXX",
        address: {
            division: "Chattogram",
            city: "Chattogram"
        }
    }

const user2: User = {
        id: 125,
        name: {     
            firstName: "Maria",
            lastName: "Gonzalez"
        },
        gender: "female",
        contactNo: "+8801XXXXXXXXX",
        address: {
            division: "Dhaka",
            city: "Dhaka"
        }
    }

// function

type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;