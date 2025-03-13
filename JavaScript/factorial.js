console.log('Factorial Exercise');

let arr = [];

let n = prompt('Enter the number you want Factorial of');

console.log('The number you want factorial of is: ', n);

for (let index = 0; index < n; index++) {
  arr.push(index + 1);
}

let ans = 1;
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  ans = ans * element;
}

console.log('The factorial of ' + n + ' is ' + ans);
