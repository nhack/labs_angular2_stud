var object = {
  foo: function() {
    console.log(this === object);
  }
};

object.foo(); // true

function foo() {
  console.log(this);
}

new foo() // foo
foo() // window or undef

function Person(first, last, age) {
  this.first = first;
  this.last = last;
  this.age = age;

  this.toString = function() {
    console.log('Person: ' + this.first + ' ' + this.last + '[' + this.age + ']');
  }
}

function User(first, last, age, password) {
  this.first = first;
  this.last = last;
  this.age = age;
  this.password = password

  this.toString = function() {
    console.log('User: ' + this.first + ' ' + this.last + '[' + this.age + ']' + ': ' + (this.password ? this.password : 'null'));
  }
}

person = new Person('suveti', 'george', 24);
user = new User('marius', 'cristea', 30, 'secret');
person.toString();
person.toString.call(person);
person.toString.call(user);
user.toString.call(person);
