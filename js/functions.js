// Функция проверки длины строки
const isLessOrEqual = (string, length) => string.length <= length;

isLessOrEqual('проверяемая строка', 10);

//Функция для проверки, является ли строка палиндромом
const isPalindrom = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ','');

  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
};

isPalindrom('Лёша на полке клопа нашёл ');

//Функция для извлечения числа
const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};
extractNumber('2023 год');
extractNumber('5');
extractNumber('цифр нет');

//Аналог функции padStart()
const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  if (actualPad <= 0) {
    return string;
  }

  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};
myPadStart('1', 2, '0'); // '01'
myPadStart('1', 4, '0'); // '0001'
myPadStart('q', 4, 'werty');// 'werq'
myPadStart('qwerty', 4, '0'); // 'qwerty'
