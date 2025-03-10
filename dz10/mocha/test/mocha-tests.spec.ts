import { expect } from 'chai';
import { AdminUser } from '../src/admin-user';
import { PremiumUser } from '../src/premium-user';
import { RegularUser } from '../src/regular-user';
import { UserRole } from '../src/iuser';

describe('User class tests', () => {
    describe('Admin', () => {
        let adminUser: AdminUser;

        beforeEach(() => {
            adminUser = new AdminUser('1', 'Admin', 'adminadmin@gmail.com', 3);
        });

        it('returns correct role', () => {
            expect(adminUser.getRole()).to.equal(UserRole.ADMIN);
        });

        it('returns correct admin level', () => {
            expect(adminUser.getAdminLevel()).to.equal(3);
        });
    });

    describe('Premium', () => {
        let premiumUser: PremiumUser;

        beforeEach(() => {
            premiumUser = new PremiumUser('2', 'Sofiia Hryshyna', 'sofka@outlook.com', 12);
        });

        it('returns correct subscription end date', () => {
            const currentDate = new Date();
            const expectedDate = new Date(currentDate.setMonth(currentDate.getMonth() + 12));
            expect(premiumUser.getSubscriptionEndDate().getTime()).to.be.closeTo(expectedDate.getTime(), 1000);
        });

        it('sets subscription end date correctly', () => {
            const newDate = new Date(2024, 0, 1);
            premiumUser.setSubscriptionEndDate(newDate);
            expect(premiumUser.getSubscriptionEndDate()).to.equal(newDate);
        });
    });

    describe('Regular', () => {
        let regularUser: RegularUser;

        beforeEach(() => {
            regularUser = new RegularUser('3', 'Gleb Moroz', 'glebm@hotmail.com');
        });

        it('returns correct role', () => {
            expect(regularUser.getRole()).to.equal(UserRole.REGULAR);
        });
    });
});
