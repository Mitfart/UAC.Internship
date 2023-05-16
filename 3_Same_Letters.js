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
   return strings[0]
      .split('')
      .filter(char => {
         return ArrayEquals(
            strings,
            strings.filter(s => s.match(char))
         )
      });
}


function ArrayEquals(a, b) {
   return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
}