"use strict";
var Actions;
(function (Actions) {
    Actions["CREATE_SERVER"] = "create-server";
    Actions["UPDATE_SERVER"] = "update-server";
    Actions["DELETE_SERVER"] = "delete-server";
    Actions["CREATE_USER"] = "create-user";
    Actions["UPDATE_USER"] = "update-user";
    Actions["DELETE_USER"] = "delete-user";
    Actions["CREATE_POST"] = "create-post";
    Actions["UPDATE_POST"] = "update-post";
    Actions["DELETE_POST"] = "delete-post";
})(Actions || (Actions = {}));
;
const myEmployee = {
    name: "James",
    startDate: new Date(),
    privileges: [Actions.CREATE_SERVER, Actions.DELETE_USER],
    action: (action) => {
        console.log(`${action}`);
    }
};
const user = {
    name: "James",
    privileges: [Actions.CREATE_POST, Actions.DELETE_POST],
    startDate: new Date(),
    action: (action) => {
        console.log(`${action}`);
    }
};
console.log(myEmployee);
user.action(Actions.CREATE_POST);
const addCombinable = (a, b) => {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
};
console.log(addCombinable(1, 2));
const printEmployeeInfo = (emp) => {
    if ('privileges' in emp) {
        console.log('name:', emp.name);
        console.log('privileges: ', emp.privileges);
    }
    else {
        console.log('name: ', emp.name);
        console.log('started: ', emp.startDate);
    }
};
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
    loadCargo(amount) {
        console.log("Loading cargo...", amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
const useVehicle = (vehicle) => {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
};
useVehicle(v2);
const moveAnimal = (animal) => {
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
};
const sparrow = {
    type: "bird",
    flyingSpeed: 10,
};
moveAnimal(sparrow);
moveAnimal({ type: "bird", flyingSpeed: 100 });
const input = document.getElementById("input");
const text = input.value;
const input2 = undefined;
const storedData = input2 !== null && input2 !== void 0 ? input2 : 'DEFAULT';
console.log('Stored: ' + storedData);
//# sourceMappingURL=advanced_types.js.map