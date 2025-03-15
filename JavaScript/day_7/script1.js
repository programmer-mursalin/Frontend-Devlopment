// let num = 7;
// let arr = Array.from(Array(num + 1).keys());
// let c = arr.reduce((a, b) => a + b, 0);
// console.log(c);

// const numbers = [10, 20, 30, 40];

// const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// console.log(sum); // Output: 100

// function fact(num) {
//   let arr = Array.from(Array(num + 1).keys());
//   let c = arr.slice(1).reduce((a, b) => a * b);
//   return c;
// }

// function facFor(number) {
//   let fac = 1;
//   for (let index = 1; index <= number; index++) {
//     fac = fac * index;
//   }
//   return fac;
// }
// console.log(factorial(a));
// console.log(facFor(a));

// find maximum number use reduce function

// let arr = [1, 2, 3, 4, 5];

// let c = arr.reduce((a, b) => (b > a ? b : a), arr[0]);
// console.log(c);
// string concatenation
const words = ['আমি', 'JavaScript', 'শিখছি'];

const sentence = words.reduce((acc, curr) => acc + ' ' + curr);

console.log(sentence); // Output: "আমি JavaScript শিখছি"
