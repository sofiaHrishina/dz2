export interface UserRole {
    roleName: string;
    accessLevel: number;
}

export abstract class UserBase {
    protected id: number;
    public name: string;
    protected email: string;
    protected role: UserRole;

    public constructor(id: number, name: string, email: string, role: UserRole) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }

    public abstract getInfo(): string;
}

export class User extends UserBase {
    public constructor(id: number, name: string, email: string) {
        super(id, name, email, { roleName: 'User', accessLevel: 1 });
    }

    public getInfo(): string {
        return `User: ${this.name} (${this.email}) - Role: ${this.role.roleName}`;
    }
}


export class Admin extends User {
    public constructor(id: number, name: string, email: string) {
        super(id, name, email);
        this.role = { roleName: 'Admin', accessLevel: 5 };
    }

    public banUser(user: User): string {
        return `Admin ${this.name} banned user ${user.name}.`;
    }

    public getInfo(): string {
        return `Admin: ${this.name} (${this.email}) - Role: ${this.role.roleName}, Access Level: ${this.role.accessLevel}`;
    }
}

