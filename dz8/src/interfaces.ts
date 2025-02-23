export interface Geo {
    lat: string;
    lng: string;
  }
  
  export interface Address {
    street: string;
    city: string;
    geo: Geo;
  }
  
  export interface User {
    id: number;
    name: string;
    username: string;
    address: Address;
  }
  
  export class UserSummary {
    id: number;
    fullName: string;
    location: string;
    
  
    constructor(user: User) {
      this.id = user.id;
      this.fullName = `${user.name} (${user.username})`;
      const coordinates = `${user.address.geo.lat}, ${user.address.geo.lng}`;
      this.location = `${user.address.street}, ${user.address.city}, ${coordinates}`;
    }
  
    greet(): string {
      return `Welcome, dear ${this.fullName}! Your location has been identified as: ${this.location}.`;
    }
  }

  export async function getJson(userId: number): Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    const json = await response.json() as User;
    return json;
    }

    export function createSummary(user: User): UserSummary {
        return new UserSummary(user);
      }
