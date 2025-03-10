import { AdminUser } from '../src/admin-user';
import sinon from 'sinon';
import { expect } from 'chai';
import { RegularUser } from '../src/regular-user';
import { UserRole } from '../src/iuser';
import { User } from '../src/user';

describe('User class tests', () => {
    describe('Admin with object instance', () => {
        const instance = sinon.createStubInstance(AdminUser);

        it('returns correct admin level', () => {
            instance.getAdminLevel.returns(3);
            expect(instance.getAdminLevel()).to.be.equal(3);
        });

        const adminUser = new AdminUser('1', 'Admin', 'adminadmin@gmail.com', 3);

        it('should mock the hasAdminAccess method', function() {
            const hasAccessMock = sinon.stub(adminUser, 'hasAdminAccess').returns(true);
            const hasAccess = adminUser.hasAdminAccess(3);
            expect(hasAccess).to.be.true;
            hasAccessMock.restore();
        });

    });

    describe('RegularUser', function() {
        const regularUser = new RegularUser('2', 'Sofiia', 'sofka@gmail.com');

        it('should mock getRole method of RegularUser', function() {
            const getRoleMock = sinon.stub(regularUser, 'getRole').returns(UserRole.PREMIUM);
            const role = regularUser.getRole();
            expect(role).to.equal(UserRole.PREMIUM);
            getRoleMock.restore();
        });

        const userGetIdStub = sinon.stub(User.prototype, 'getId').returns('mocked-id');

        it('calls the parent class method getid', () => {
            expect(regularUser.getId()).to.equal('mocked-id');
            expect(userGetIdStub.calledOnce).to.be.true;
            userGetIdStub.restore();
        });

        const userGetUsernameStub = sinon.stub(User.prototype, 'getUsername').returns('mocked-username');
        it('calls the parent class method getusername', () => {
            expect(regularUser.getUsername()).to.equal('mocked-username');
            expect(userGetUsernameStub.calledOnce).to.be.true;
            userGetUsernameStub.restore();
        });

        const userSetEmailStub = sinon.stub(User.prototype, 'setEmail');
        it('calls method inherited from User', () => {
            regularUser.setEmail('sofka27@gmail.com');
            expect(userSetEmailStub.calledOnceWith('sofka27@gmail.com')).to.be.true;
            userSetEmailStub.restore();
        });


    });
});

