var User = function(first, last, age, password) {
  var first = first;
  var last = last;
  var age = age;
  var password = password

  var encryptPassword = function() {
    return password.replace(/./g, '*');
  }

  return {
    toString: function() {
      console.log('User: ' + first + ' ' + last + '[' + age + ']' + ': ' + (password ? encryptPassword() : 'null'));
    }
  }
}

user = User('marius', 'cristea', 30, 'secret');
user.toString();
