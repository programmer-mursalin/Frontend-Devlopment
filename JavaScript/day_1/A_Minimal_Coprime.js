const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');

let t = parseInt(input[0]);
for (let i = 1; i <= t; i++) {
  const [c, d] = input[i].split(' ').map(Number);
  console.log(c === 1 && d === 1 ? 1 : d - c);
}
