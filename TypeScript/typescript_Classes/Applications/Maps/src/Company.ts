import faker from 'faker'

export class Company {
    companyName: string;
    catchPhrase: string
    location: {
        lng: number,
        lat: number
    }
    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.latitude())
        }
    }
    markerContent(): string {
        return `Company Name: ${this.companyName}
                Catchphrase: ${this.catchPhrase}`
    }
    color: 'blue'
}