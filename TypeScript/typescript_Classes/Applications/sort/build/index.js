"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import yourt sorter claee
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([1000, 13, -5, 0]);
console.log(numbersCollection.data); //?
const myList = new LinkedList_1.LinkedList();
myList.add(500);
myList.add(-10);
myList.add(1550);
myList.sort(); //?
myList.print(); //?
const charactersCollection = new CharactersCollection_1.CharactersCollection("XtttoYtot");
charactersCollection.sort();
console.log(charactersCollection.data); //?
// "X".charCodeAt(0) //?
