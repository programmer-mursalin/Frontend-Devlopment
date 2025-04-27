// let obj = {
//   a: 1,
//   b: 'harry',
// };

// console.log(obj);

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal;

class animal {
  constructor(name) {
    this.name = name;
    console.log('obj is created');
  }
  east() {
    console.log('kha raha hoo');
  }

  jumps() {
    console.log('kood raha hoo');
  }
}
class lion extends animal {
  constructor(name) {
    super(name);
    console.log('this is the lion boss');
  }

  east() {
    console.log('hello'); // method overriding
  }
}

// let a = new animal('bunny');
// let b = new lion('shera');

let a = new animal('shera');
let c = new animal('not sh');
console.log(a);
console.log(c);
a.bunny();
