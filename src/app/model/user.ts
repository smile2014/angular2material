import { UUID } from 'angular2-uuid';

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    roleId: number;
    token?: string
}