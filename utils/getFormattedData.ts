import { readFileSync } from 'fs';

export function getFormattedData(path: string) {
    return readFileSync(path, 'utf-8')
        .split('\n')
        .map(str => str.trim());
}