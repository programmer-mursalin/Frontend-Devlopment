const URL = 'https://catfact.ninja/fact';

// let promise = fetch(URL);
// console.log(promise);

// const getfacts = async () => {
//   let response = await fetch(URL);
//   console.log(response);
// };
const factpera = document.querySelector('#fact');
const getfacts = async () => {
  let response = await fetch(URL);
  console.log(response); // এটা Response object

  let data = await response.json(); // এখানে response.body কে JSON format এ convert করা হচ্ছে
  console.log(data); // এখন এখানে আপনি ডেটা দেখতে পাবেন যা JSON ফরম্যাটে
  factpera.innerHTML = data[0].text;
};

// const getfacts = () => {
//   fetch(URL)
//     .then((response) => {
//       console.log(response.status); // fetch সফল হলে status দেখা যাবে
//     })
//     .catch((error) => {
//       console.log('Error:', error); // fetch ব্যর্থ হলে এরর দেখা যাবে
//     });
// };
