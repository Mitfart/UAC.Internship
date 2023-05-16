/*
Дан список строк.
Нужно вывести все буквы, которые встречаются в каждой из строк списка
(включая дубли).

Example
["bella","label","roller"] -> ["e","l","l"] ["cool","lock","cook"] -> ["c","o"]
*/
let a = ["bella", "label", "roller"];
let b = ["cool", "lock", "cook"];


console.log(GetSameLetters(a));
console.log(GetSameLetters(b));


function GetSameLetters(strings) {
   let result = null;

   for (const str of strings) {
      let curResult = str.split('')
         .filter(char => {
            return ArrayEquals(
               strings,
               strings.filter(s => s.match(char))
            )
         });

      result = (result ?? curResult).filter(c => curResult.includes(c));

      if (result.length > curResult.length)
         result = curResult;
   }

   return result;
}


/*
function GetSameLetters(strings) {
   let root = strings[0].split('').sort();
   let resCase = [];

   for (let start = 0; start < root.length; start++) {
      for (let length = 0; length < root.length - start; length++) {
         let end = start + length + 1;
         let matchCase = root.slice(start, end);
         let curRes = strings.filter(s => s.split('').sort().join('').match(matchCase.join('')));

         // console.log(matchCase + " -> " + curRes)

         if (ArrayEquals(curRes, strings) && matchCase.length > resCase.length) {
            resCase = matchCase;
         }
      }
   }

   return resCase;
}
*/


function ArrayEquals(a, b) {
   return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
}