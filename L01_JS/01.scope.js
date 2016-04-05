// global scope
var x = 10;
console.log('x in global: ' + x);

function foo() {
  // foo scope
  console.log('x in foo: ' + x);

  function bar() {
    // bar scope
    console.log('x in bar: ' + x);
    var y = 30;
    console.log('y in bar: ' + y);
  }
  bar();
  //console.log('y in foo: ' + y);
}

foo();
//console.log('y in global: ' + y);
