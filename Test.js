// АНАГРАМА

const a = 'danger';
const b = 'garden';

const comapare = (str1, str2) => {
  console.log(
    str1.split('').sort().join('') === str2.split('').sort().join('')
  );
};

comapare(a, b);

// BIGGEST VALUE

const c = [3, 5, 8, 65, 2, 78, 54, 6, 21, 34, 98];
const t = 3;

const findMax = (arr, amount) => {
  const sorted = [...arr]
    .sort((a, b) => a - b)
    .slice(c.length - amount, c.length);
  console.log(sorted);
};

findMax(c, t);

// Breckets
const br = '()()()()))(((()((';
let result = 0;
const brCheck = arr => {
  arr.split('').forEach(item => (item === '(' ? (result += 1) : (result -= 1)));
  return result === 0;
};
console.log(brCheck(br), ` Result: ${result}`);
