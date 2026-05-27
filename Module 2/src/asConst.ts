const UserRoles = {
    Admin: "ADMIN",
    Editor: "EDITOR",
    Viewer: "VIEWER"
} as const;

const canEditContent = (role: (typeof UserRoles)[keyof typeof UserRoles]) =>{
    if(role === UserRoles.Admin || role === UserRoles.Editor){
        return true;
    }
    return false; 
}

const isEditPermissible = canEditContent(UserRoles.Admin);
console.log(isEditPermissible);