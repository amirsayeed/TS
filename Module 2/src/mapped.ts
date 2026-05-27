const arrayOfNum: number[] = [1,2,4];

// const arrayOfString: string[] = ["1","2","4"];

const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());
console.log(arrayOfStringUsingMap);

const user = {
    id: 222
}

type AreaOfNum = {
    height: number;
    width: number;
}

type height = AreaOfNum["height"];

type Area<T> = {
    [key in keyof T]: T[key]; 
}

const area1: Area<{height: number; width: boolean}> = {
    height: 10,
    width: false
}