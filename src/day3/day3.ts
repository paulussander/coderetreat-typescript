import {join} from 'path';
import {readFileLines} from "../file-reader";

export function day3(): number {
    let fullyQualifiedFileName = join(__dirname, 'day2.txt');
    let combinedInput = readFileLines(fullyQualifiedFileName);
    let partTotal = 0;
    for (let i = 0; i < combinedInput.length; i++) {
        printNumbersWithNeighbours(combinedInput[i], combinedInput, i)
    }
    return partTotal;
}

export function day3_part2(): number {
    return 0;
}

function printNumbersWithNeighbours(line: string, input: string[], lineIndex: number): string[] {
    let characters = line.split('');

    return findNumberWithNeighbours(line, 0, input, lineIndex);
}

function findNumberWithNeighbours(line: string, startingIndex: number = 0, input: string[], lineIndex: number) {
    let numberStartIndex, numberEndIndex;
    let i = startingIndex;
    while (i < line.length && !numberEndIndex) {
        if (checkDigit(line[i])) {
            if (!numberStartIndex) {
                numberStartIndex = i;
            }
        }
        if (!checkDigit(line[i]) && numberStartIndex) {
            numberEndIndex = i - 1;
        }
        i++;
    }
    if (numberEndIndex && numberStartIndex) {
        return input[lineIndex - 1].substring(numberStartIndex - 1, numberStartIndex + 1).concat(
            input[lineIndex].substring(numberStartIndex - 1, numberStartIndex + 1),
            input[lineIndex + 1].substring(numberStartIndex - 1, numberStartIndex + 1)
        )
    }else return null
}

function checkDigit(character: string) {
    if ("123456789".includes(character)) {
        return parseInt(character)
    }
}


