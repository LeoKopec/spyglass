export class User {

    user_id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;

    constructor(user_id: number = 0,
                username: string = '',
                password: string = '',
                firstName: string = '',
                lastName: string = '') {
        this.user_id = user_id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
