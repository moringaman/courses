
// Import yourt sorter claee
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

 const numbersCollection = new NumbersCollection([1000, 13, -5, 0])
 console.log(numbersCollection.data); //?

 const myList = new LinkedList()
myList.add(500)
myList.add(-10)
myList.add(1550)
myList.sort() //?
myList.print() //?

const charactersCollection = new CharactersCollection("XtttoYtot")
charactersCollection.sort()

console.log(charactersCollection.data) //?

// "X".charCodeAt(0) //?