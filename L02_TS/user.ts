import {Person} from './person';

export class User extends Person {
    constructor(first: string,
        last: string,
        age: number,
        private password: string) {
        super(first, last, age);
    }

    private encryptPassword = () => this.password.replace(/./g, '*');

    public toString = () => 'User: ' + this.first + ' '
        + this.last + '[' + this.age + ']' + ': '
        + (this.password ? this.encryptPassword() : 'null');
}
