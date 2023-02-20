"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split("");
        const leftside = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftside;
        this.data = characters.join("");
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase().charCodeAt(0) > this.data[rightIndex].toLowerCase().charCodeAt(0);
    }
}
exports.CharactersCollection = CharactersCollection;
