let anything: any;

anything = "Sayeed";

// (anything as string).length

const kgtoGmConverter = (value: string|number): string | number | undefined => {
    if(typeof value === "number"){
        return value * 1000;
    }else if(typeof value === "string"){
        const [result] = value.split(" ");
        return `Converted output is ${Number(result) * 1000} gm`;
    }
}

const result1 = kgtoGmConverter(5) as number;
// console.log(result1);

const result2 = kgtoGmConverter("50 kg") as string;
// console.log(result2);

type CustomError = {
    message: string;
}

try{

}catch(err){
    console.log((err as CustomError).message);
}