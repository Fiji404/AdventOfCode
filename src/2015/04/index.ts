import { createHash } from 'crypto';
const HASH_INPUT = 'ckczppom';

const getHashWithLeadingZeroes = (startingZeroes: string, numberCombinationForCorrectHash: number, hash: string) => {
    while (!hash.startsWith(startingZeroes)) hash = createHash('md5').update(`${HASH_INPUT}${++numberCombinationForCorrectHash}`).digest('hex');
    return numberCombinationForCorrectHash;
};

console.log('PART 1:', getHashWithLeadingZeroes('00000', 0, ''));
console.log('PART 2:', getHashWithLeadingZeroes('000000', 0, ''));