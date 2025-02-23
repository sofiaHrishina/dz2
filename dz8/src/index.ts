import { User, Admin } from './abstraction';
import { getJson, createSummary, UserSummary } from './interfaces';

const user1 = new User(1, 'Sofiia Hryshyna', 'sofka@gmail.com');
const admin1 = new Admin(2, 'Sofiia Admin', 'admin@gmail.com');

console.log(user1.getInfo());
console.log(admin1.getInfo());

console.log(admin1.banUser(user1));

async function summarizeUser(userId: number): Promise<void> {
    try {
        const userData = await getJson(userId);
        const summary: UserSummary = createSummary(userData);
        console.log(summary.greet());
    } catch (error) {
        console.error('Error:', error);
    }
}

summarizeUser(5)
    .then(() => console.log('Success'))
    .catch(error => console.error('An error occurred:', error));
