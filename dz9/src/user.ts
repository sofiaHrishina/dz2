import { IUser, UserRole } from './iuser';

export abstract class User implements IUser {
    protected id: string;
    protected username: string;
    protected email: string;
    protected createdAt: Date;

    public constructor(id: string, username: string, email: string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.createdAt = new Date();
    }

    public getId(): string {
        return this.id;
    }

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getCreationDate(): Date {
        return this.createdAt;
    }

    public abstract getRole(): UserRole;
}
