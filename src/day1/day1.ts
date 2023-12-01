import {join} from 'path';
import {readFileLines} from "../file-reader";

export function day1(): number {
    let fullyQualifiedFileName = join(__dirname, 'day1.txt');
    const sanitizer = new CoordinateSanitizer();
    return readFileLines(fullyQualifiedFileName)
        .map(line => sanitizer.processLine(line))
        // .filter(combinedDigits => !isNaN(combinedDigits))
        .reduce((prev, current) => prev + current);
}

export function day1_part2(): number {
    let fullyQualifiedFileName = join(__dirname, 'day1.txt');
    const sanitizer = new CoordinateSanitizer();
    return readFileLines(fullyQualifiedFileName)
        .map(line => sanitizer.processLineWithWords(line))
        .reduce((prev, current) => prev + current,0);
}

export class CoordinateSanitizer {
    public processLine(input: String): number {
        let numbers = input.split("")
            .filter(i => "123456789".includes(i));
        if (numbers.length == 0) {
            return NaN;
        }
        return parseInt(numbers[0] + numbers[numbers.length - 1]);
    }

    public processLineWithWords(input: String): number {
        let firstDigit = this.findFirstDigit(input);
        let lastDigit = this.findLastDigit(input);
        let number = firstDigit! * 10 + lastDigit!;
        console.log(`input ${input} -> number ${number}`)
        return number
    }

    private findFirstDigit(input: String): number | undefined {
        let digit
        let verboseDigit = ""
        let count = 0
        while (!digit && count < input.length) {
            let character = input[count]
            let digit = this.checkDigit(character)
            if (!digit) {
                verboseDigit += character;
                digit = this.checkVerboseDigit(verboseDigit)
            }
            if (digit) {
                return digit;
            } else {
                count++
            }
        }
    }

    private findLastDigit(input: String): number | undefined {
        let digit
        let verboseDigit = ""
        let count = input.length
        while (!digit && count > 0) {
            count--
            let character = input[count]
            let digit = this.checkDigit(character)
            if (!digit) {
                verboseDigit = character + verboseDigit;
                digit = this.checkVerboseDigit(verboseDigit)
            }
            if (digit) {
                return digit;
            }
        }
    }

    private checkDigit(character: string) {
        if ("123456789".includes(character)) {
            return parseInt(character)
        }
    }

    private checkVerboseDigit(verboseDigit: string) {
        if (verboseDigit.includes("one")) {
            return 1;
        }
        if (verboseDigit.includes("two")){
            return 2;
        }
        if (verboseDigit.includes("three")){
            return 3;
        }
        if (verboseDigit.includes("four")){
            return 4;
        }
        if (verboseDigit.includes("five")){
            return 5;
        }
        if (verboseDigit.includes("six")){
            return 6;
        }
        if (verboseDigit.includes("seven")){
            return 7;
        }
        if (verboseDigit.includes("eight")){
            return 8;
        }
        if (verboseDigit.includes("nine")){
            return 9;
        }
    }

}

