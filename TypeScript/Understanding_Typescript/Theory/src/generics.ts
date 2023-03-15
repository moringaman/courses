// Generic Types

// A Generic Type is a type that can be used to represent any type of data.


const names: Array<string | number> = [];

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 20);
})

promise.then(data => {
  data.split('');
  console.log(data);
})

function merge<T extends object, U extends object>(objA: T, objB: U) {
  let result: T & U = { ...objA, ...objB } as T & U;
  return result;
}

const obj = merge({ name: 'Max', hobbies: ['golf', 'chess'] }, { age: 30 });

const age = obj.age;

console.log(age)

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "got no elements "
  if (element.length > 0) {
    descriptionText = "Got " + element.length + " elements"
  }
  return [element, descriptionText];
}

console.log(countAndPrint(["sports", "cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return `Value: ${obj[key]}`;
}

console.log(extractAndConvert({ name: 'Max', age: 30 }, 'age'));

// Generic Classes
// A generic class is a class that can have any number of type parameters.

class DataStorage<T extends string | number | boolean> {
  private Data: T[] = [];

  addItem(item: T) {
    this.Data.push(item);
  }

  removeItem(item: T) {
    this.Data.splice(this.Data.indexOf(item), 1);
  }

  returnData() {
    return this.Data;
  }
}

const wineList = new DataStorage<string>();

wineList.addItem('red');
wineList.addItem('white');
wineList.removeItem('red');
console.log(wineList.returnData());

//Utility Types
//
// Partial Types
// A partial type is a type that only contains a subset of the properties of another type.


interface CourseGoal {

  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}; // Use Partial to create an empty object which will 
  //eventually be filled with the properties of the type
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// ReadOnly Types
// A read-only type is a type that cannot be modified.

const readOnlyNames: Readonly<string[]> = ['Max', 'Anna'];




