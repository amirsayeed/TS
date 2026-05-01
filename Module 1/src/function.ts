function add(num1: number, num2: number):number{
 const result = num1 + num2;
 return result;
}

const arrAdd = (num1: number, num2: number): number => {
 const result = num1 + num2;
 return result;
};

add(5, 16);
arrAdd(10, 20);

// object=> function=> method
const poorUser = {
    name: "Sayeed",
    balance: 0,
    addBalance(value: number){
    const totalBalance = this.balance + value;
    return totalBalance;
    }
}

poorUser.addBalance(1000);

const arr: number[] = [1,4,6];
const newArr = arr.map((num:number):number => num*num);
console.log(newArr);