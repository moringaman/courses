"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = __importDefault(require("./Sorter"));
class CharactersCollection extends Sorter_1.default {
    constructor(data) {
        super();
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
        this.data = characters.join(""); //?
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase().charCodeAt(0) > this.data[rightIndex].toLowerCase().charCodeAt(0);
    }
}
exports.CharactersCollection = CharactersCollection;
