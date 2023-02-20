import path from "path";
import fs from "fs";


export abstract class CsvFileReader<T>{
  data: T[] = [];

  constructor(public fileName: string) {}

  abstract mapRow(row: string[]): T

  read(): void {
    const dataFile = path.join(__dirname, `../${this.fileName}`);
    this.data = fs
      .readFileSync(dataFile, { encoding: "utf8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
