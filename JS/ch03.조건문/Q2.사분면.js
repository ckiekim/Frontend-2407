// 사분면 고르기 - 백준도장 14681
let x = Math.ceil(Math.random() * 20);
let y = Math.ceil(Math.random() * 20);
x *= Math.random() > 0.5 ? 1 : -1;
y *= Math.random() > 0.5 ? 1 : -1;

let quadrant = '';
if (x > 0 && y > 0)
    quadrant = '1사분면';
else if (x < 0 && y > 0)
    quadrant = '2사분면';
else if (x < 0 && y < 0)
    quadrant = '3사분면';
else if (x > 0 && y < 0)
    quadrant = '4사분면';
else
    quadrant = '좌표축';

console.log(x, y, quadrant);