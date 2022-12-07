import { getFormattedData } from '../../utils';

const gameRounds = getFormattedData('./input.txt');
const GAME_RESULTS_SCHEMA = {
    firstStrategy: {
        'B Z': 9,
        'A Y': 8,
        'C X': 7,
        'C Z': 6,
        'B Y': 5,
        'A X': 4,
        'A Z': 3,
        'C Y': 2,
        'B X': 1,
    },
    secondStrategy: {
        'B Z': 9,
        'A Z': 8,
        'C Z': 7,
        'C Y': 6,
        'B Y': 5,
        'A Y': 4,
        'A X': 3,
        'C X': 2,
        'B X': 1,
    },
};

console.log('PART 1: ', gameRounds.reduce((acc, val) => acc + GAME_RESULTS_SCHEMA.firstStrategy[val], 0));
console.log('PART 2: ', gameRounds.reduce((acc, val) => acc + GAME_RESULTS_SCHEMA.secondStrategy[val], 0));