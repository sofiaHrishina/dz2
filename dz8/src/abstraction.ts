export interface UserRole {
    roleName: string;
    accessLevel: number;
}

export abstract class UserBase {
    id: number;
    name: string;
    email: string;
    role: UserRole;

    constructor(id: number, name: string, email: string, role: UserRole) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }

    abstract getInfo(): string;
}

export class User extends UserBase {
    constructor(id: number, name: string, email: string) {
        super(id, name, email, { roleName: "User", accessLevel: 1 });
    }

    getInfo(): string {
        return `User: ${this.name} (${this.email}) - Role: ${this.role.roleName}`;
    }
}


export class Admin extends User {
    constructor(id: number, name: string, email: string) {
        super(id, name, email);
        this.role = { roleName: "Admin", accessLevel: 5 }; 
    }

    banUser(user: User): string {
        return `Admin ${this.name} banned user ${user.name}.`;
    }

    getInfo(): string {
        return `Admin: ${this.name} (${this.email}) - Role: ${this.role.roleName}, Access Level: ${this.role.accessLevel}`;
    }
}

