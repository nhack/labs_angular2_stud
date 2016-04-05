export class Person {
    constructor(protected first: string,
        protected last: string,
        protected age: number) {
    }

    public isYoung = () => this.age < 30;

    public toString = () => 'Person: ' + this.first + ' ' + this.last + '[' + this.age + ']';

    public delayedLog = () => setTimeout(() => console.log(this.toString()), 1000);
};
