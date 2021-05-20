// Arrays

let colors = ["white", "black", "blue", "yellow"];
console.log(colors[2]);

const ustads = ["nadeem", "shahzad", "ali", "zahid"];
console.log(ustads[2]);

let lahore = ["islamabad", "karavhi", "pandi", "pashawar"]
console.log(lahore[5]);

// concat

let animals = ["cow", "dog", "cat", "ox"];
let nnumbers = [1, 22, 44, 55, 66, 99];
console.log(animals.concat(nnumbers))


// copywithin

let letter = ["nedeem", "imran", "shafi", "ali"];
console.log(letter.copyWithin(2, 3))

// enteries

const itr = animals.entries();
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);

// every

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));

//   fill

console.log(array1.fill(9))

//   filter

const names = ["imran", "nadeem", "farhan", "salman", "shafa", "saqlain"];
console.log(names.filter(word => word.length > 5))
console.log(names.filter(word => word.length >= 5))
console.log(names.filter(word => word.length |= 5))

//   find

let num = [1, 2, 3, 4, 5, 6, 7];
let numbr = num.find(element => element > 5)
console.log(numbr)

const array2 = [5, 12, 8, 130, 44];
const found = array2.find(element => element > 10);
console.log(found);

//       find index
// const = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 90]
// const found = array2.findIndex(element => element > 10);
// console.log(found);

//    flat

const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());

// foreach

let numbers = [49, 46, 44, 6, 76, 23, 4, 6, 7, 11, 12, 14, 15, 434, 5213, 3321, ['gh', 're', 'df']];
numbers.forEach(element => console.log(element));


// form  "creating from strings"

console.log(Array.from('foo'));
console.log(Array.from('imran'));

// my own

console.log(Array.from('imran'));

// Array.prototype.includes

const namesFirst = ["imran", "nadeem", "farhan", "salman", "shafa", "saqlain"];
console.log(namesFirst.includes("imran"));
console.log(namesFirst.includes("aliustad"));

//   induxFO

let numbr1 = [11, 34, 44, 5, 9];
console.log("found index is  " + numbr1.indexOf(112));


//   extra data

let dolly = "imran";
console.log(dolly.indexOf("r"));

//   Array.prototype.join()

let ustad = [11, 34, 44, 5, 9];
console.log(ustad.join("+"));
console.log(ustad.join("-"));


//   Array.prototype.pop()

let pop = ["imran", "salmna", "farhan", "irfan"];
console.log(pop.pop());
console.log(pop);


// push

pop.push('nade');
console.log(pop);

//   shift

pop.shift();
console.log(pop);

//   Un-shift

pop.unshift('aki')
console.log(pop);

//    sort
console.log(pop.sort());


//    even

let git = [1, 21, 33, 55, 65, 77, 88, 99];
const even = (element) => element % 2 === 0;
console.log(git.some(even));

//    splice

let months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 3, 'Feb');
months.splice(2, 0, 'Feb');
console.log(months);


//   TO-strings

const ary = [1, 2, 'a', '1a'];
// console.log(ar.toString());

// keys======
console.log(Object.keys(ary));
//   To-Source

// const lattr = new Array('a', 'b', 'c');
// console.log(lattr.toSource());

//   keys