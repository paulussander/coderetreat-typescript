import {join} from 'path';
import {readFileLines} from "../file-reader";

export function day1(): number {
    let fullyQualifiedFileName = join(__dirname, 'day1.txt');
    const sanitizer = new CoordinateSanitizer();
    let sum = readFileLines(fullyQualifiedFileName)
        .map(line => sanitizer.processLine(line))
        .filter(combinedDigits => !isNaN(combinedDigits) )
        .reduce((prev, current) => prev + current)
    return sum;
}


export class CoordinateSanitizer {
    public processLine(input: String): number {
        let numbers = input.split("")
            .filter(i => "0123456789".includes(i));
        if(numbers.length == 0){
            return NaN;
        }
        return parseInt(numbers[0] + numbers[numbers.length-1]);
    }
}

