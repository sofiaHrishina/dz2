import { User } from './user';
import { UserRole, IAdmin } from './iuser';

export class AdminUser extends User implements IAdmin {
    private adminLevel: number;

    public constructor(id: string, username: string, email: string, adminLevel: number) {
        super(id, username, email);
        this.adminLevel = adminLevel;
    }

    public getRole(): UserRole {
        return UserRole.ADMIN;
    }

    public getAdminLevel(): number {
        return this.adminLevel;
    }

    public setAdminLevel(level: number): void {
        this.adminLevel = level;
    }

    public hasAdminAccess(requiredLevel: number): boolean {
        return this.adminLevel >= requiredLevel;
    }
}
