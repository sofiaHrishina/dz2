import { User } from './user';
import { UserRole, IPremium } from './iuser';

export class PremiumUser extends User implements IPremium {
    private subscriptionEndDate: Date;

    public constructor(id: string, username: string, email: string, subscriptionMonths: number) {
        super(id, username, email);
        this.subscriptionEndDate = new Date();
        this.subscriptionEndDate.setMonth(this.subscriptionEndDate.getMonth() + subscriptionMonths);
    }

    public getRole(): UserRole {
        return UserRole.PREMIUM;
    }

    public getSubscriptionEndDate(): Date {
        return this.subscriptionEndDate;
    }

    public setSubscriptionEndDate(date: Date): void {
        this.subscriptionEndDate = date;
    }

    public extendSubscription(months: number): void {
        const newDate = new Date(this.subscriptionEndDate);
        newDate.setMonth(newDate.getMonth() + months);
        this.subscriptionEndDate = newDate;
    }
}
