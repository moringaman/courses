
import path from 'path';
import fs from 'fs'
import { dateStringToDate } from './utils'
import { MatchResult } from 'MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string]

export class CsvFileReader {
    data: MatchData[] = [];

    constructor(public fileName: string){}

    read():void {
        const dataFile = path.join(__dirname, `../${this.fileName}`)
         this.data = fs.readFileSync(dataFile, { encoding:'utf8' })
                        .split('\n')
                        .map((row: string):string[] => {
                           return row.split(',')
                        })
                        .map((row: string[]): MatchData => {
                           return [
                               dateStringToDate(row[0]),
                               row[1],
                               row[2],
                               parseInt(row[3]),
                               parseInt(row[4]),
                               row[5] as MatchResult, // 'H', "A", 'D
                               row[6],
                           ]
                        })
    }
}