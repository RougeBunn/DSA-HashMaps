const { HashMap } = require('./HashMap');
const { HashMap_SepChain } = require('./HashMap_SepChain');

HashMap.MAX_LOAD_RATIO = 0.5;
HashMap.SIZE_RATIO = 3;

HashMap_SepChain.MAX_LOAD_RATIO = 0.5;
HashMap_SepChain.SIZE_RATIO = 3;

function main() {
  const lotr = new HashMap();
  const data = [
    { Hobbit: 'Bilbo' },
    { Hobbit: 'Frodo' },
    { Wizard: 'Gandolf' },
    { Human: 'Aragon' },
    { Elf: 'Legolas' },
    { Maiar: 'The Necromancer' },
    { Maiar: 'Sauron' },
    { RingBearer: 'Gollum' },
    { LadyOfLight: 'Galadriel' },
    { HalfElven: 'Arwen' },
    { Ent: 'Treebeard' }
  ];
  data.forEach(obj => {
    const key = Object.keys(obj)[0];
    lotr.set(key, obj[key]);
  });

  console.log(lotr);

  //1. There are 11 items and the length is 9. 2 items are missing since there are
  //   2 items with the same key value ('Hobbit', 'Maiar').

  console.log(lotr.get('Maiar'));
  console.log(lotr.get('Hobbit'));
  // Sauron and Frodo are returning because there is 2 keys storing 2 different values
  // and its only showing the latter value since we aren't resolving collisions.

  console.log(lotr._capacity);
  // The capacity is 24 because if we go over the capacity load ratio (50%) of 8
  // and we have to multiply that by our size_ratio value of 3 is 24
}

// main();

//2.
const WhatDoesThisDo = function() {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

// WhatDoesThisDo();
// both sets of hashmap gives out the last value that it sets because they
// both have the same key. map1 = 20, map2 = 10

//3. 1) [22, 88, , , 4, 15, 28, 17, 59, 31, 10]
//   2) [, {28, 19, 10}, 20, 12, , 5, (15, 33), , 17]

//4.

function rmDuplicates(str) {
  const map = new Map();
  let newStr = '';
  str.split('').forEach(letter => {
    if (!map.has(letter)) {
      map.set(letter, '');
      newStr += letter;
    }
  });
  return newStr;
}

// console.log(rmDuplicates('google all that you think can think of'));

// 5.

function palindrome(str) {
  const result = new Map();
  for (let i = 0; i < str.length; i++) {
    if (!result.delete(str[i])) {
      result.set(str[i], 1);
    }
  }
  // console.log(result.size, result);
  if (result.size <= 1) {
    return true;
  } else {
    return false;
  }
}

// console.log(palindrome('racecar'));

//6.

function anagrams(input) {
  let map = new HashMap_SepChain();
  input.forEach(word => {
    map.set(word, '');
  });
  let result = [];
  map._hashTable.forEach(arr => result.push(arr.map(obj => obj.key)));
  return result;
}

// console.log(anagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));
function sepMain() {
  const lotr = new HashMap_SepChain();
  const data = [
    { Hobbit: 'Bilbo' },
    { Hobbit: 'Frodo' },
    { Wizard: 'Gandolf' },
    { Human: 'Aragon' },
    { Elf: 'Legolas' },
    { Maiar: 'The Necromancer' },
    { Maiar: 'Sauron' },
    { RingBearer: 'Gollum' },
    { LadyOfLight: 'Galadriel' },
    { HalfElven: 'Arwen' },
    { Ent: 'Treebeard' }
  ];
  data.forEach(obj => {
    const key = Object.keys(obj)[0];
    lotr.set(key, obj[key]);
  });
}
