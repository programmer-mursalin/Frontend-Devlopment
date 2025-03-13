console.log('Mursalin');
// let clsbox = document.getElementsByClassName('box');
// console.log(clsbox);
// clsbox[2].style.backgroundColor = 'red';
// document.getElementById('one').style.backgroundColor = 'green';
document.querySelector('.box').style.backgroundColor = 'yellow';
document.querySelectorAll('.box').forEach((e) => {
  e.style.backgroundColor = 'green';
  document.getElementsByTagName('div'); //return all div tag
  e[3].matches('box'); // box id is here so return true else returne false
  document.querySelector('.container').contains(e[2]);
  document.querySelector('.container').contains(document.querySelector('body')); // return body is a parent node of container
  document.querySelector('.body').contains(document.querySelector('container')); //this is true
});
