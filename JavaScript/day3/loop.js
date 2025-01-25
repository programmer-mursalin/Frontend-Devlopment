console.log('I am a loop tutorial0');

let a = 1;

let obj = {
  name: 'Mursalin',
  role: 'Progranner',
  company: 'ShuIt',
};

for (const key in obj) {
  const element = obj[key];
  console.log(key, element);
}

// for (const key of 'I love you') {
//   console.log(key);
// }

// for (let index = 0; index < 100; index++) {
//   console.log(a + index);
// }
// let i = 1;
// while (i < 6) {
//   console.log(i);
//   i++;
// }

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 6);
