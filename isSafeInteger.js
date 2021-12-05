let num1 = 386483265486;
console.log(Number.isSafeInteger(num1));

let num2 = 0000000;
console.log(Number.isSafeInteger(num2));

let num3 = Infinity;
console.log(Number.isSafeInteger(num3));

let num4 = -Infinity;
console.log(Number.isSafeInteger(num4));

let num5 = 32e34;
console.log(Number.isSafeInteger(num5));

let num6 = '0';
console.log(Number.isSafeInteger(num6));

let num7 = NaN;
console.log(Number.isSafeInteger(num7));

let num8 = 34;
console.log(Number.isSafeInteger(num8));

let num9 = null;
console.log(Number.isSafeInteger(num9));

let num10 = 45.67;
console.log(Number.isSafeInteger(num10));
