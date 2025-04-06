let promise = new Promise((resolve, reject) => {
  console.log('I am a promise');
  // resolve('solve');
  reject('undefined');
});

// function getData(dataid, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('data', dataid);
//       reject('wrong');
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

promise.then((res) => {
  console.log('promis fulfil', res);
});

promise.catch((err) => {
  console.log('rejected', err);
});
