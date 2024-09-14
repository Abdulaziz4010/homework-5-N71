// 1-masala

// function x(n, m) {
//   let count = 0;
//   let remainder = n;

//   while (remainder >= m) {
//     remainder -= m;
//     count++;
//   }

//   return {
//     count: count,
//     remainder: remainder,
//   };
// }

// let n = 17;
// let m = 5;

// let result = x(n, m);
// console.log(`Bo'linma: ${result.count}, Qoldiq: ${result.remainder}`);

// 2-masala

// n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarini teskari tartibda chiqaruvchi programma tuzilsin

// function x(n) {
//   let str = "";

//   while (n > 0) {
//     let lastDigit = n % 10;
//     str += lastDigit;
//     n = Math.floor(n / 10);
//   }

//   return str;
// }

// let n = 12345;
// let result = x(n);
// console.log(`Teskari tartibda: ${result}`);

// 3-masala

//  n butun soni berilgan (n > 0). Bo'lib butun va goldiq qismlarini aniqlash orgall, berilgan son raqamlari yig'indisini va raqamlari sonini chiqaruvchi programma tuzilsin.

// function x(n) {
//     let sum = 0;
//     let count = 0;

//     while (n > 0) {
//         let lastDigit = n % 10;
//         sum += lastDigit;
//         count++;
//         n = Math.floor(n / 10);
//     }

//     return {
//         sum: sum,
//         count: count
//     };
// }

// let n = 12345;
// let result = x(n);
// console.log(`Raqamlar yig'indisi: ${result.sum}, Raqamlar soni: ${result.count}`);

// 4-masala
// n butun soni berilgan (n > 0). Bo'lib butun va goldiq qismlarini anilash orqali, berilgan son raqamlarining orasida 2 raqami bor - yo' qligini aniqlovchi programma tuzilsin.

// function hasDigitTwo(n) {
//   while (n > 0) {
//     let lastDigit = n % 10;
//     if (lastDigit === 2) {
//       return true;
//     }
//     n = Math.floor(n / 10);
//   }
//   return false;
// }

// let n = 12345;
// let result = hasDigitTwo(n);
// console.log(result ? "2 raqami mavjud" : "2 raqami mavjud emas");

// 5-masala
// n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.

// let son = 70;

// function isPrime(a) {
//   let count = 0;

//   for (let i = 1; i <= a; i++) {
//     if (a % 2 == 0) {
//       count++;
//     }
//   }

//   if (count == 2) {
//     return "tub son";
//   }

//   return "tub son emas";
// }

// let result = isPrime(son);

// console.log(result);

// 6-masala

// function x(A, B) {
//   let remainder = A;
//   let count = 0;

//   while (remainder >= B) {
//       remainder -= B;
//       count++;
//   }

//   return remainder;
// }

// let A = 23;
// let B = 5;

// let result = x(A, B);
// console.log(`Bo'sh qism: ${result}`);

// 7-masala

// function x(a, b) {
//   let count = 0;

//   while (a >= b) {
//     a -= b;
//     count++;
//   }

//   return count;
// }

// let a = 50;
// let b = 10;

// let result = x(a, b);
// console.log(`Nechta B kesma joylashtirilishi mumkin: ${result}`);
