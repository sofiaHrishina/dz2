
import {beforeEach, describe, expect, test, afterEach} from '@jest/globals';
import { IUser } from '../src/iuser';
import { AdminUser } from '../src/admin-user';
import { PremiumUser } from '../src/premium-user';
import { RegularUser } from '../src/regular-user';
import { displayUserInfo } from '../src/index';

describe('Test displayUserInfo function', () => {
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('displays correct info for a RegularUser', () => {
        const user: IUser = new RegularUser('1', 'Sofiia Hryshyna', 'sofka@gmail.com');
        displayUserInfo(user);

        expect(consoleSpy).toHaveBeenCalledWith('User ID: 1');
        expect(consoleSpy).toHaveBeenCalledWith('Username: Sofiia Hryshyna');
        expect(consoleSpy).toHaveBeenCalledWith('Email: sofka@gmail.com');
        expect(consoleSpy).toHaveBeenCalledWith('Role: regular');
    });

    test('displays correct info for a PremiumUser', () => {
        const user: PremiumUser = new PremiumUser('2', 'Jane Dool', 'jane@outlook.com', 6);
        displayUserInfo(user);

        expect(consoleSpy).toHaveBeenCalledWith('User ID: 2');
        expect(consoleSpy).toHaveBeenCalledWith('Username: Jane Dool');
        expect(consoleSpy).toHaveBeenCalledWith('Email: jane@outlook.com');
        expect(consoleSpy).toHaveBeenCalledWith('Role: premium');
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/Subscription ends:/));
    });

    test('should display correct info for an AdminUser', () => {
        const user: AdminUser = new AdminUser('3', 'Admin Admin', 'admin@gmail.com', 3);
        displayUserInfo(user);

        expect(consoleSpy).toHaveBeenCalledWith('User ID: 3');
        expect(consoleSpy).toHaveBeenCalledWith('Username: Admin Admin');
        expect(consoleSpy).toHaveBeenCalledWith('Email: admin@gmail.com');
        expect(consoleSpy).toHaveBeenCalledWith('Role: admin');
        expect(consoleSpy).toHaveBeenCalledWith('Admin level: 3');
    });
});
