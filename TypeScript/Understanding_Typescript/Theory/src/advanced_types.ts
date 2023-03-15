enum Actions {
  CREATE_SERVER = "create-server",
  UPDATE_SERVER = "update-server",
  DELETE_SERVER = "delete-server",
  CREATE_USER = "create-user",
  UPDATE_USER = "update-user",
  DELETE_USER = "delete-user",
  CREATE_POST = "create-post",
  UPDATE_POST = "update-post",
  DELETE_POST = "delete-post",
}

// Intersection types
//
interface Admin {
  name: string;
  privileges: Actions[];
  action: (...args: Actions[]) => void;
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Admin, Employee { };

// type ElevatedEmployee = Admin & Employee;


const myEmployee: ElevatedEmployee = {
  name: "James",
  startDate: new Date(),
  privileges: [Actions.CREATE_SERVER, Actions.DELETE_USER],
  action: (action: Actions) => {
    console.log(`${action}`)
  }
}



const user: ElevatedEmployee = {
  name: "James",
  privileges: [Actions.CREATE_POST, Actions.DELETE_POST],
  startDate: new Date(),
  action: (action: Actions) => {
    console.log(`${action}`);
  }
}

console.log(myEmployee)

user.action(Actions.CREATE_POST);

type Combinable = string | number;
type Numeric = number | boolean;

const addCombinable = (a: Combinable, b: Combinable) => {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

console.log(addCombinable(1, 2));


type UnknownEmployee = Employee | Admin;

const printEmployeeInfo = (emp: UnknownEmployee) => {
  if ('privileges' in emp) {
    console.log('name:', emp.name);
    console.log('privileges: ', emp.privileges);
  } else {
    console.log('name: ', emp.name);
    console.log('started: ', emp.startDate);
  }
}


printEmployeeInfo(myEmployee);


class Car {
  drive() {
    console.log("Driving...");
  }
}


class Truck {
  drive() {
    console.log("Driving a truck...");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo...", amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed: ", speed);
}

const sparrow: Animal = {
  type: "bird",
  flyingSpeed: 10,
}

moveAnimal(sparrow);
moveAnimal({ type: "bird", flyingSpeed: 100 });


const input = document.getElementById("input") as HTMLInputElement;

const text = input.value

const input2 = undefined

const storedData = input2 ?? 'DEFAULT'

console.log('Stored: ' + storedData);
