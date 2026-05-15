// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithObject = (value: object) => [value];

const createArrWithGeneric = <T>(value: T) => [value];

const stringArray = createArrWithGeneric("Hello, World!");
const numberArray = createArrWithGeneric(42);
const objectArray = createArrWithGeneric({ name: "Alice", age: 30 });

// tuple

const createArrWithTuple = (param1: string, param2: string) => [param1, param2];

const createArrTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [param1, param2];

const res1 = createArrTupleWithGeneric("Hello", 42);
const res2 = createArrTupleWithGeneric({ name: "Alice" }, [1, 2, 3]);
// console.log(res1);
// console.log(res2);

const addStudentToCourse = <T>(studentInfo: T) =>{
    return {
        courseName: "TypeScript Basics",
        ...studentInfo
    }
}

const student1 = {
 id: 120,
 name: "Sayeed",
 hasPen: true
}

const student2 = {
    id: 321, 
    name: "John Cobi",
    hasCar: true,
    isMarried: true
}

const result = addStudentToCourse(student2);
console.log(result);