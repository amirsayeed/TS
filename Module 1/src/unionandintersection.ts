// union

type userRole = "admin" | "user";

const getDashboard = (role: userRole): string =>{
    if(role === "admin"){
        return "Admin Dashboard";
    } else if(role === "user"){
        return "User Dashboard";
    }   else {  
        return "Guest Dashboard";
    }
}

// intersection

type Employee = {
    id: number,
    name: string,
    phoneNo: string
}

type Manager = {
    designation: string,
    teamSize: number
};

type EmployeeManager = Employee & Manager;

const ChowdhuryShaheb: EmployeeManager = {
    id: 1,
    name: "Chowdhury Shaheb",
    phoneNo: "1234567890",
    designation: "General Manager",
    teamSize: 50
}