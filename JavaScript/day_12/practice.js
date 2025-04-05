// function sum(a, b) {
//   console.log(a + b);
// }
// function calculater(a, b, sumcallback) {
//   sumcallback(a, b);
// }
// // calculater(1, 2, sum);
// calculater(1, 2, (a, b) => {
//   console.log(a + b);
// });

// const hello = () => {
//   console.log('hello');
// };

// function hello() {
//   console.log('wait');
// }
// setTimeout(hello, 3000);
//

// callback hell
// function getData(dataId, getnextData) {
//   setTimeout(() => {
//     console.log('data', dataId);
//     if (getnextData) {
//       getnextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3);
//   });
// });
