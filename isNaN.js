let num1 = NaN;
console.log(Number.isNaN(num1));

let num2 = "NaN";
console.log(Number.isNaN(num2));

let num3 = Infinity;
console.log(Number.isNaN(num3));

let num4 = "string"/5;
console.log(Number.isNaN(num4));

let num5 = 32e34;
console.log(Number.isNaN(num5));

let num6 = '0';
console.log(Number.isNaN(num6));

let num7 = undefined;
console.log(Number.isNaN(num7));

let num8 = {};
console.log(Number.isNaN(num8));
