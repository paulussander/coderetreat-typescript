import {join} from 'path';
import {readFileLines} from "../file-reader";
import {isMap} from "node:util/types";

export function day2(): number {
    let fullyQualifiedFileName = join(__dirname, 'day2.txt');
    const parser = new ElfGameParser();
    const checker = new ElfGamePossibilityChecker();
    return readFileLines(fullyQualifiedFileName)
        .map(line => parser.parse(line))
        .filter(game => checker.checkGame(game))
        .map(elfGame => elfGame.id)
        .reduce((previousValue, currentValue) => previousValue +currentValue, 0)
}

export function day2_part2(): number {
    let fullyQualifiedFileName = join(__dirname, 'day2.txt');
    const parser = new ElfGameParser();
    const checker = new ElfGamePossibilityChecker();
    return readFileLines(fullyQualifiedFileName)
        .map(line => parser.parse(line))
        .map(elfGame => elfGame.highestRed * elfGame.highestGreen * elfGame.highestBlue)
        .reduce((previousValue, currentValue) => previousValue +currentValue, 0)
}

class ElfGame {
    id: number = 0
    highestGreen: number = 0
    highestBlue: number = 0
    highestRed: number = 0
}

export class ElfGameParser {
    public parse(input: string): ElfGame {
        let gameId: number = parseInt(input.split(" ")[1].split(":")[0])
        let green = input
            .split(":")[1]
            .split(";")
            .flatMap(revealing => revealing.split(",")
                .filter(color => color.includes("green"))
                .map(color => parseInt(color.trim().split(" ")[0])))
            .reduce((previousValue, currentValue) => currentValue > previousValue ? currentValue : previousValue)
        let blue = input
            .split(":")[1]
            .split(";")
            .flatMap(revealing => revealing.split(",")
                .filter(color => color.includes("blue"))
                .map(color => parseInt(color.trim().split(" ")[0])))
            .reduce((previousValue, currentValue) => currentValue > previousValue ? currentValue : previousValue)
        let red = input
            .split(":")[1]
            .split(";")
            .flatMap(revealing => revealing.split(",")
                .filter(color => color.includes("red"))
                .map(color => parseInt(color.trim().split(" ")[0])))
            .reduce((previousValue, currentValue) => currentValue > previousValue ? currentValue : previousValue)

        return { id: gameId, highestGreen: green, highestBlue: blue, highestRed: red};
    }
}

export class ElfGamePossibilityChecker {
    acceptableRed = 12
acceptableGreen= 13
acceptableBlue= 14
    public checkGame(game: ElfGame): boolean {
        return game.highestRed <= this.acceptableRed
        && game.highestGreen <= this.acceptableGreen
        && game.highestBlue <= this.acceptableBlue
    }
}

