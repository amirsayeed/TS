// type UserRoles = "Admin" | "Editor" | "Viewer";

enum UserRoles {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
}

const canEditContent = (role: UserRoles) =>{
    if(role === UserRoles.Admin || role === UserRoles.Editor){
        return true;
    }
    return false;
}

const isEditPermissible = canEditContent(UserRoles.Admin);
console.log(isEditPermissible);