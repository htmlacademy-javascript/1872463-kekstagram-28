// user - массив объектов
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

const getNames = (arr) => {
  const names = [];
  arr.forEach((element) => {
    if (element.isActive === true) {
      names.push(element.name);
    }
  });
  return names;
};

getNames1 = (arr) => {
  return arr.map((item) => {
    return item.name;
  })
};
//getNames1 = arr => arr.map(item => item.name);
//console.log(getNames(users));

// const getActiveUsers = (usersArray) => {
//   return usersArray.filter((element) => {
//     return element.isActive;
//   }).map((item) => {
//     return item.name;
//   });
// };


const getActiveUsers = usersArray => usersArray.filter(element => element.isActive).map(item => item.name);

console.log(getActiveUsers(users));

