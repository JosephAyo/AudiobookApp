const arr1 = [
  ['name', 'id', 'age', 'weight', 'Cool'],
  ['Susan', '3', '20', '120', true],
  ['John', '1', '21', '150', true],
  ['Bob', '2', '23', '90', false],
  ['Ben', '4', '20', '100', true],
];
const res = [
  ['Susan', 'John', 'Bob', 'Ben'],
  ['3', '1', '2', '4'],
  ['20', '21', '23', '20'],
  ['120', '150', '90', '100'],
  [true, true, false, true],
  ['50', '45', '43', '48'],
  ['yes', 'yes'],
];

const arr2 = [
  ['name', 'id', 'height'],
  ['Bob', '2', '50'],
  ['John', '1', '45'],
  ['Ben', '4', '43'],
  ['Susan', '3', '48'],
];

const arr3 = [
  ['name', 'id', 'parent'],
  ['Bob', '2', 'yes'],
  ['John', '1', 'yes'],
];
const joined = [arr1, arr2, arr3];
const columns = joined.reduce((acc, k) => {
  let temp = [];
  k[0].forEach((el) => {
    if (!acc.includes(el)) {
      temp.push(el);
    }
  });
  if (temp) {
    return [...acc, ...temp];
  } else {
    return acc;
  }
}, []);

// console.log('accumulated', columns);

const our = columns.reduce((acc, column, currIndex) => {
  let temp = [];
  joined.forEach((arr) => {
    const index = arr[0].indexOf(column);
    arr.forEach((user, i) => {
      let accCheck;
      if (currIndex > 0) {
        accCheck = currIndex;
      }
      if (i != 0) {
        if (column == 'name' || column == 'id') {
          if (!temp.includes(user[index])) temp.push(user[index]);
        } else if (index > 0) temp.push(user[index]);
      }
    });
  });
  if (temp.length > 0) {
    return [...acc, temp];
  } else {
    return acc;
  }
}, []);

console.log('our', our);

// const rest = our[1].reduce((acc, key, i) => {
//   let temp = [];
//   joined.forEach((arr) => {
//     console.log('arr', key, arr);
//     if(key==)
//     temp.push(arr);
//   });
//   //   return [...acc, temp];
// }, []);

// console.log('rest', rest);
