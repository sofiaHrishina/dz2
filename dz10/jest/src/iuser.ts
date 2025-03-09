export enum UserRole {
    REGULAR = 'regular',
    PREMIUM = 'premium',
    ADMIN = 'admin'
}
export interface IUser {
    getId(): string;
    getUsername(): string;
    setUsername(username: string): void;
    getEmail(): string;
    setEmail(email: string): void;
    getRole(): UserRole;
}
export interface IAdmin {
    getAdminLevel(): number;
    setAdminLevel(level: number): void;
    hasAdminAccess(requiredLevel: number): boolean;
}
export interface IPremium {
    getSubscriptionEndDate(): Date;
    setSubscriptionEndDate(date: Date): void;
    extendSubscription(months: number): void;
}
