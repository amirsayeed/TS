// spread operator

const friends = ["Alice", "Bob", "Charlie"];
const newFriends = ["David", "Eve", "Frank"];

const allFriends = [...friends, ...newFriends];

// console.log(allFriends);

const user = {name: "Sayeed", phoneNo: "1234567890"};

const otherInfo = {age: 28, city: "Dhaka"};

const userInfo = {...user, ...otherInfo};

// console.log(userInfo);

// rest operator

const sendInvite = (...friends: string[]): void => {
    friends.forEach((friend: string) => console.log(`Invitation sent to ${friend}`));
}

sendInvite("Alice", "Bob", "Charlie", "David", "Eve", "Frank");

