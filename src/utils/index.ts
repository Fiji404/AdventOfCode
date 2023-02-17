import { readFileSync } from 'fs';

export function getData(path: string, splitByOne: boolean = false) {
    const data = readFileSync(path, 'utf-8');
    if (splitByOne) return data.split('');
    return data.split('\n').map(d => d.trim());
}
