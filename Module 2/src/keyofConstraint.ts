type RichPeopleVehicle = {
    car: string,
    bike: string,
    cng: string
}

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeopleVehicle;

const myVehicle: MyVehicle2 = "car";
//console.log(myVehicle);

type User = {
    id: number,
    name: string,
    address: {
        city: string
    }
}

const user: User = {
    id: 223,
    name: "Sayeed",
    address: {
        city: "Chattogram"
    }
}

const product = {
    brand: "HP",
    model: "Pavilion",
    price: 45000
}

const student = {
    id: 124,
    class: 10
}

const getPropertyFromObj = <X>(obj: X, key: keyof X) =>{
    return obj[key];
}

const result1 = getPropertyFromObj(user, "name");
// console.log(result1);
// const result2 = getPropertyFromObj(product, "brand");
// console.log(result2);
const result3 = getPropertyFromObj(student, "class");
console.log(result3);