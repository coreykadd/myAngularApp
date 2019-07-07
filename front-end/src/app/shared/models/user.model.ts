export interface User {
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    age: number;
    phoneNumber: string;
    address: {
        address1: string;
        address2?: string;
        country: string;
        city: string;
    };
}
