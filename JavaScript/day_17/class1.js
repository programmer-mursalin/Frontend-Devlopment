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

// class animal {
//   constructor(name) {
//     this.name = name;
//     console.log('obj is created');
//   }
//   east() {
//     console.log('kha raha hoo');
//   }

//   jumps() {
//     console.log('kood raha hoo');
//   }
// }
// class lion extends animal {
//   constructor(name) {
//     super(name);
//     console.log('this is the lion boss');
//   }

//   east() {
//     console.log('hello'); // method overriding
//   }
// }

// // let a = new animal('bunny');
// // let b = new lion('shera');

// let a = new animal('shera');
// let c = new animal('not sh');
// console.log(a);
// console.log(c);
// a.bunny();

// use gatter and setter and method

class Person {
  constructor(name) {
    this._name = name; // আমরা _name দিয়ে private মতো ব্যবহার করি
  }

  // Getter method
  get name() {
    return this._name;
  }

  // Setter method
  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Name can't be empty!");
    }
  }
}

// অবজেক্ট তৈরি
let p = new Person('Mursalin');

// Getter ব্যবহার
console.log(p.name); // Output: Mursalin

// Setter ব্যবহার
p.name = 'Shuvo';
console.log(p.name); // Output: Shuvo

// যদি খালি নাম সেট করি
p.name = ''; // Output: Name can't be empty!
