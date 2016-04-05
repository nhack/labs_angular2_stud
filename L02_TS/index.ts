class Person {
    constructor(protected first: string,
        protected last: string,
        protected age: number) {
    }

    public isYoung = () => this.age < 30;

    public toString = () => 'Person: ' + this.first + ' ' + this.last + '[' + this.age + ']';

    public delayedLog = () => setTimeout(() => console.log(this.toString()), 1000);
};

class User extends Person {
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

var person = new Person('suveti', 'george', 24);
console.log(person);
console.log(person.toString());
person.delayedLog();

var user = new User('marius', 'cristea', 30, 'secret');
console.log(user);
console.log(user.toString());
