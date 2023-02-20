const carManufacturers: string[] = ['ford', 'toyota', 'renault'];
const dates: Date[] = [new Date(), new Date()]

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

let MyCar: string = carManufacturers[0] //?
let MyCar2: string = carManufacturers.pop() //?

carManufacturers.map((car: string): string => {
    return car.toUpperCase()
}) //?

// Multiple types in an array

const importantDates: (Date | string)[] = [new Date(), '2030-10-10']