import { User } from './user';
import { UserRole } from './iuser';

export class RegularUser extends User {
    public constructor(id: string, username: string, email: string) {
        super(id, username, email);
    }

    public getRole(): UserRole {
        return UserRole.REGULAR;
    }
}
