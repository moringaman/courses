"use strict";
const names = [];
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 20);
});
promise.then(data => {
    data.split('');
    console.log(data);
});
function merge(objA, objB) {
    let result = Object.assign(Object.assign({}, objA), objB);
    return result;
}
const obj = merge({ name: 'Max', hobbies: ['golf', 'chess'] }, { age: 30 });
const age = obj.age;
console.log(age);
function countAndPrint(element) {
    let descriptionText = "got no elements ";
    if (element.length > 0) {
        descriptionText = "Got " + element.length + " elements";
    }
    return [element, descriptionText];
}
console.log(countAndPrint(["sports", "cooking"]));
function extractAndConvert(obj, key) {
    return `Value: ${obj[key]}`;
}
console.log(extractAndConvert({ name: 'Max', age: 30 }, 'age'));
class DataStorage {
    constructor() {
        this.Data = [];
    }
    addItem(item) {
        this.Data.push(item);
    }
    removeItem(item) {
        this.Data.splice(this.Data.indexOf(item), 1);
    }
    returnData() {
        return this.Data;
    }
}
const wineList = new DataStorage();
wineList.addItem('red');
wineList.addItem('white');
wineList.removeItem('red');
console.log(wineList.returnData());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const readOnlyNames = ['Max', 'Anna'];
//# sourceMappingURL=generics.js.map