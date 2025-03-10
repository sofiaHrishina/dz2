import { AdminUser } from './admin-user';
import { PremiumUser } from './premium-user';
import { RegularUser } from './regular-user';
import { IUser } from './iuser';


function displayUserInfo(user: IUser): void {

    console.log(`User ID: ${user.getId()}`);
    console.log(`Username: ${user.getUsername()}`);
    console.log(`Email: ${user.getEmail()}`);
    console.log(`Role: ${user.getRole()}`);

    if (user instanceof PremiumUser) {

        console.log(`Subscription ends: ${user.getSubscriptionEndDate()}`);
    } else if (user instanceof AdminUser) {

        console.log(`Admin level: ${user.getAdminLevel()}`);
    }

}

async function createUsers(): Promise<void> {
    const regularUser = new RegularUser('1', 'Sofiia Hryshyna', 'sofka@gmail.com');
    const premiumUser = new PremiumUser('2', 'Jane Dool', 'jane@outlook.com', 6);
    const adminUser = new AdminUser('3', 'Admin Admin', 'admin@gmail.com', 3);

    displayUserInfo(regularUser);
    displayUserInfo(premiumUser);
    displayUserInfo(adminUser);
}

createUsers();
