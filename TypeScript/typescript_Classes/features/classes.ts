// Classes
class Vehicle {

    constructor(public color: string) {}

    protected honk(): void {
        console.log('Honk honk!!')
    }
}

// Inheritance

class Truck extends Vehicle {
    
    constructor(public wheels: number, color: string){
        super(color)
    } 
    private drive(): void {
        console.log('BBBBbrbrrrr...')
    }
    public startDriving(): void {
        this.drive()
        this.honk()
    }
}

const truck = new Truck(6, 'Yellow')
console.log(truck.color, truck.wheels)
truck.startDriving()