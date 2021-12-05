let num1 = 386483265486;
console.log(Number.isFinite(num1));

let num2 = 0000000;
console.log(Number.isFinite(num2));

let num3 = Infinity;
console.log(Number.isFinite(num3));

let num4 = -Infinity;
console.log(Number.isFinite(num4));

let num5 = 32e34;
console.log(Number.isFinite(num5));

let num6 = '0';
console.log(Number.isFinite(num6));

let num7 = NaN;
console.log(Number.isFinite(num7));

let num8 = 0 / 0;
console.log(Number.isFinite(num8));

let num9 = null;
console.log(Number.isFinite(num9));

let num10 = 23/0;
console.log(Number.isFinite(num10));
