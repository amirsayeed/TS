type Student = {id: number, name: string, class: string};

const addStudentToCourse = <T extends Student>(studentInfo: T) =>{
    return {
        course: "Next Level",
        ...studentInfo
    }
}

const student1 = {
    id: 124,
    name: "Sayeed",
    hasPen: true
}

const student2 = {
    id: 312,
    name: "Jhankar Mahbub",
    hasCar: true,
    isMarried: true
}

const student3 = {
    id: 433,
    name: "Shihab",
    hasWatch: true,
    dob: "23-11-1994",
    class: "O Level"
}

const result = addStudentToCourse(student3);
console.log(result);

