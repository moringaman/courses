import { FootballMatchReader } from './MatchReader'
import { MatchResult } from './MatchResult';

let csvFileReader = new FootballMatchReader('football.csv')
csvFileReader.read() 

console.log(csvFileReader.data[0][0])


let manUnitedWins = 0

let footballData = csvFileReader.data //?

for (let match of footballData) {
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin ) {
        manUnitedWins++
    } else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin ) {
        manUnitedWins++
    }
}

console.log(manUnitedWins)
