function Person(first, last, age) {
  this.first = first;
  this.last = last;
  this.age = age;
}
Person.prototype.isYoung = function() {
  return this.age < 30;
}
Person.prototype.toString = function() {
  console.log('Person: ' + this.first + ' ' + this.last + '[' + this.age + ']');
}

function User(first, last, age, password) {
  Person.call(this, first, last, age, password); // call super
  this.password = password;
}
User.prototype = Person.prototype;
//User.prototype = Object.create(Person.prototype);
//User.prototype.constructor = User;

person = new Person('suveti', 'george', 24);
user = new User('marius', 'cristea', 30, 'secret');

console.log(person);
console.log(user);
person.toString();
user.toString();

User.prototype.toString = function() {
  console.log('User: ' + this.first + ' ' + this.last + '[' + this.age + ']' + ': ' + (this.password ? this.password : 'null'));
}

person.toString();
user.toString();
