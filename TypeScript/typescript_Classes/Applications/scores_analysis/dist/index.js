"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
let csvFileReader = new MatchReader_1.FootballMatchReader('football.csv');
csvFileReader.read();
console.log(csvFileReader.data[0][0]);
let manUnitedWins = 0;
let footballData = csvFileReader.data; //?
for (let match of footballData) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
