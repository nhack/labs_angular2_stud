import {Person} from './person';
import {User} from './user';

var person = new Person('suveti', 'george', 24);
console.log(person);
console.log(person.toString());
person.delayedLog();

var user = new User('marius', 'cristea', 30, 'secret');
console.log(user);
console.log(user.toString());
