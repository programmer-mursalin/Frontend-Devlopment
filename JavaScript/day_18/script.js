async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}
(async function main() {
  let a = await sleep();
  let b = await sleep();

  //   let [x, y] = [1, 2];   //destructuring
  //   console.log(x, y);

  // let [x, y, ...rest] = [1, 2, 3, 4, 5, 6];
  // console.log(x, y, rest);

  let arr = [1, 4, 6];
  console.log(arr[0] + arr[1] + arr[2]);
  console.log(sum(...arr)); ///spread operator
})(); //iife(immediately invoke function)

const sum = async (a, b, c) => {
  return a + b + c;
};
