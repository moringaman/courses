// typescript decorators

function Logger(logString: string) {
  return function(constructor: Function) {
    console.log('Logging...' + logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super()
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    }
  }
}

@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name: string = "leon ";
  age: number = 30;
  constructor() {
    console.log('constructor');
  }
}

const person = new Person();

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log('target:', target);
  console.log('name', name);
  console.log('desc', descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Method decorator!');
  console.log('target:', target);
  console.log('name', name);
  console.log('desc', descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!');
  console.log('target:', target);
  console.log('name', name);
  console.log('position', position);
}

class Product {
  @Log
  title: string;
  private _price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log2
  set price(newPrice: number) {
    if (newPrice > 0) {
      this._price = newPrice;
    } else {
      throw new Error('Invalid price - should be positive');
    }
  }

  get price() {
    return this._price;
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

//const p1 = new Product('Book', 10);
//console.log(p1.price);
