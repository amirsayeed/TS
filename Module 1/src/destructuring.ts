// object destructuring
const user = {
    id: 124,
    name: {
        firstName: "Amir",
        middleName: "Mohammad",
        lastName: "Sayeed"
    },
    gender: "male",
    favouriteColor: "blue"
}
 
const {id, name: {firstName, middleName, lastName}, favouriteColor: myFavouriteColor} = user;
// console.log(id, firstName, middleName, lastName, myFavouriteColor);

//array destructuring
const friends = ["Rahim", "Karim", "Salim", "Jabbar"];

const [, secondFriend, ] = friends;
console.log(secondFriend);