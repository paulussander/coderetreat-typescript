import {readFileSync} from "fs";
import {join} from "path";

export function readFileLines(fullyQualifiedFileName: string) : string[] {
    return readFileSync(join(fullyQualifiedFileName), 'utf-8')
        .split("\n");
}