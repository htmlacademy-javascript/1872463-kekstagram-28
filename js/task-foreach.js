// users - массив объектов
const users = [
  {
    id: 1,
    name: 'Kirill',
    isActive: true,
  },
  {
    id: 2,
    name: 'Olga',
    isActive: false,
  },
  {
    id: 3,
    name: 'Serg',
    isActive: true
  },
  {
    id: 4,
    name: 'Victor',
    isActive: false,
  },
];

//getNames функция внутри которой запускается цикл forEach()
//arr - локальная переменная
//arr.forEach() к локальной переменной применяется метод forEach
// console.log('Элемент ', element); //выводится весь массив объектов полностью
// const names = []; //пустой массив, в котором будут собираться имена из массива users, по ключу name (из объекта)
//element -  один объект массива получаемый  на каждой итерации
// names.push(element.name); в пустой массив names "пушим"(добавляем) элементы с ключом name из массива users
// return names; //вызов цикла (функции arr.forEach)
//getNames(users);  вызов функции приминительно ко всему массиву объектов users, и эту фукцию можно применять к разным массивам, ????? в которых есть объекты с ключом name


const getNames = (arr) => {
  const names = [];
  arr.forEach((element) => {
    names.push(element.name);
  });
  return names;
};
console.log(getNames(users));
//getNames(users);  вызов функции приминительно ко всему массиву объектов users, и эту фукцию можно применять к разным массивам, ????? в которых есть объекты с ключом name

