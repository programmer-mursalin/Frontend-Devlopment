// const colours = {
//   c1: 'red',
//   c2: 'blue',
//   c3: 'violet',
//   c4: 'yellow',
//   c5: 'green',
//   c6: 'black',
//   c7: 'purple',
//   c8: 'orange',
// };

// function random() {
//   let arr = document.getElementsByClassName('box');
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].style.backgroundColor =
//       colours[`c${Math.floor(Math.random() * 8) + 1}`];
//   }
// }

box = document.getElementsByClassName('box');
for (let i = 0; i < box.length; i++) {
  cur_box = box[i];
  rand_bg = '#' + Math.floor(Math.random() * 1000000 + 1);
  cur_box.style.backgroundColor = rand_bg;
}

// box = document.querySelectorAll('.box');
// for (let i = 0; i < box.length; i++) {
//   cur_box = box[i];
//   let r = Math.floor(Math.random() * 256); // 0 থেকে 255 এর মধ্যে র্যান্ডম মান (লাল)
//   let g = Math.floor(Math.random() * 256); // 0 থেকে 255 এর মধ্যে র্যান্ডম মান (সবুজ)
//   let b = Math.floor(Math.random() * 256); // 0 থেকে 255 এর মধ্যে র্যান্ডম মান (নীল)

//   cur_box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; // RGB ফরম্যাটে রঙ সেট
// }

document.querySelectorAll('.box').forEach((e) => {
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  e.style.backgroundColor = `rgb(${r},${g},${b})`;
});
