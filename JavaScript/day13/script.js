// let promise = new Promise((resolve, reject) => {
//   console.log('I am a promise');
//   // resolve('solve');
//   reject('undefined');
// });

function getData(dataid, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('data', dataid);
      // reject('wrong');
      resolve('success');
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  });
}

// function getData1(dataid, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('data', dataid);
//       // reject('wrong');
//       resolve('success');

//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

// promise.then((res) => {
//   console.log('promis fulfil', res);
// });

// promise.catch((err) => {
//   console.log('rejected', err);
// });
// console.log('fetchingdata1');

// let l1 = getData(1);

// l1.then((res) => {
//   console.log('fetchingdata2');
//   let l2 = getData1(2);
//   l2.then((res) => {});
// }
//promise chain
// l1.then((res) => {
//   console.log(res);
//   return getData(2);
// }).then((res) => {
//   console.log(res);
// });

// // calback hell
// getData(1, () => {
//   console.log('getiing data 2');
//   getData(2, () => {
//     console.log('getting data 3');
//     getData(3, () => {
//       console.log('getting data 4');
//       getData(4);
//     });
//   });
// });
// async

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('weather data');
//       resolve(200);
//     }, 2000);
//   });
// }
// async function getweatherdata() {
//   await api();
//   await api();
// }

// async function getalldata() {
//   for (let i = 1; i <= 10; i++) {
//     console.log('getting data', i);
//     await getData(i);
//   }
// }

// use iife (immediately invoked function expression)

(async function () {
  for (let i = 1; i <= 10; i++) {
    console.log('getting data', i);
    await getData(i);
  }
})();
