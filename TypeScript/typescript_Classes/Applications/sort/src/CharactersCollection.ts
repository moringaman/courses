import Sorter from "./Sorter";

export class CharactersCollection extends Sorter {
    constructor(public data: string){
        super()
    }

    get length():number {
        return this.data.length
    }

    swap(leftIndex:number, rightIndex:number):void {
        const characters = this.data.split("")
        const leftside = characters[leftIndex]
        characters[leftIndex] = characters[rightIndex]
        characters[rightIndex] = leftside
        this.data = characters.join("") //?
    }

    compare(leftIndex:number, rightIndex:number):boolean {
        return this.data[leftIndex].toLowerCase().charCodeAt(0) > this.data[rightIndex].toLowerCase().charCodeAt(0)
    }

}