let arr = [1, 2, 4, 5, 7];
//  Index  0, 1, 2, 3, 4
//arr.pop
//arr.push
//arr.push("Harry") // return with new length
//a.shift // begin theke delete
//arr.unshift // begin theke insert
//arr.unshift("jack")
//delete a[6]  //if possiblr delte return true  else indefined

arr[0] = 5666;
console.log(arr, typeof arr);
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

console.log(arr.toString());
console.log(arr.join(' and ')); // comma replace with and

// let numbers = [1, 2, 3, 4, 5]
// numbers.splice(1, 2) //   index 1 theke 2 ta delete
// numbers.splice(1, 3)
// numbers.splice(1, 3, 222, 333)  // when 1 to 3 index delete then this position replace with 222,333
// (4) [1, 222, 333, 5] // return with new size
//arr.slice(2) // print start with 2 index
arr.forEach((value, index, arr) => {
  console.log(value, index, arr);
});

let obj = {
  a: 1,
  b: 2,
  c: 3,
  f: 5,
};
// for (const key in obj) {
//   if (Object.hasOwnProperty.call(obj, key)) {
//     const element = obj[key];
//     console.log(element);
//   }
// }

// for (const value of a){
//     console.log(value)
// }
let newarr = [];
let arr1 = [1, 13, 5, 7, 11];
// for (let i = 0; i < arr1.length; i++) {
//   const element = arr1[i];
//   newarr.push(element ** 2);
// }
// console.log(newarr);

newarr = arr1.map((e) => {
  return e ** 2;
});
// console.log(newarr);
const greaterseven = (e) => {
  if (e > 7) return true;
  return false;
};
console.log(newarr.filter(greaterseven));
console.log(
  newarr.filter((e) => {
    if (e > 7) return true;
    return false;
  })
); //alternate before

console.log(newarr);
let arr3 = [1, 2, 3, 4, 5];
const red = (a, b) => {
  return a * b;
};
console.log(arr3.reduce(red));
Array.form('Mursalin'); // mursalin word form an array
