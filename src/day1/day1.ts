import {join} from 'path';
import {readFileLines} from "../file-reader";

export function day1(input: string = 'sayanora mofos'): string {
    let fullyQualifiedFileName = join(__dirname, 'day1.txt');
    readFileLines(fullyQualifiedFileName)
        .forEach(line => console.log("line: " + line))
    return `${input}`;
}

console.log(day1());

