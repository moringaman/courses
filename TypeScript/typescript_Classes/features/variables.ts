
// Primative types

let apples: number = 5;
let speed: string = 'fast'
let hasName: boolean = true
let nothingMuch: null = null

let nothing: undefined = undefined

// Built in Objects

let now: Date = new Date();
let colours: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3,4];
let statuses: boolean[] = [true,true,false];

// Classes

class Car {

}

let car: Car = new Car()

// Object literals

let point: {x:number; y:number} = {
    x: 10,
    y: 13
}

// Functions

const logNumber: (i:number) => void = (i) => {
    console.log(i)
}

// When to use annotation
// 1) Function that returns the 'any' types

const json = '{"x":"10", "y": "20"}'
const coordinates: {x: number, y: number} = JSON.parse(json) //?

// 2) When we declare a variable on one line and
// initialize it later

let words = ['red', 'green', 'blue']
let foundWords: boolean;

for (let i = 0; i < words.length; i++) {
    if(words[i] === 'green') {
        foundWords = true
    }
}

// 3) Variables whos type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}

