 import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './Map'

 const myUser = new User();
const myCompany = new Company();
// console.log(myUser, myCompany)

const map1 = new CustomMap('map', { zoom: 2, center: { lat: 0, lng: 0}});

map1.addMarker(myUser)
map1.addMarker(myCompany)


