const roman = {
   I: 1,
   V: 5,
   X: 10,
   L: 50,
   C: 100,
   D: 500,
   M: 1000
}


console.log(RomanToDigit('II'));
console.log(RomanToDigit('IX'));
console.log(RomanToDigit('XXVII'));


function RomanToDigit(romanNumber) {
   let numbers = romanNumber.toUpperCase().split('');
   let result = 0;

   for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
      let nextNum = numbers[i + 1];

      switch (num) {
         case 'I': result += (nextNum === 'V' || nextNum === 'X') ? -1   : roman[num]; break;
         case 'X': result += (nextNum === 'L' || nextNum === 'C') ? -10  : roman[num]; break;
         case 'C': result += (nextNum === 'D' || nextNum === 'M') ? -100 : roman[num]; break;
         default:  result += roman[num]; break;
      }
   }

   return result;
}