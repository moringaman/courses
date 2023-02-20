"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./utils");
class CsvFileReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    read() {
        const dataFile = path_1.default.join(__dirname, `../${this.fileName}`);
        this.data = fs_1.default.readFileSync(dataFile, { encoding: 'utf8' })
            .split('\n')
            .map((row) => {
            return row.split(',');
        })
            .map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    }
}
exports.CsvFileReader = CsvFileReader;
