/*
перебрать числа от 1 до 100
если число делится на 3 - вывести вместо него Fizz
если на 5 - вывести вместо него Buzz
если и на 3 и на 5 - вывести вместо него FizzBuzz
*/

for (let i = 0; i < 100; i++) {
   if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
   else if (i % 3 === 0) console.log("Fizz");
   else if (i % 5 === 0) console.log("Buzz");
}