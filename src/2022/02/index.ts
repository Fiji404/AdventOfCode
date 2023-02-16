import { getFormattedData } from '../../../utils/utils';

const GAME_ROUNDS = getFormattedData('./input.txt');

const SAME_RESULTS = {
    'B Z': 9,
    'B X': 1,
    'B Y': 5
}

const GAME_RESULTS_SCHEMA = {
    firstStrategy: {
        ...SAME_RESULTS,
        'A Y': 8,
        'C X': 7,
        'C Z': 6,
        'A X': 4,
        'A Z': 3,
        'C Y': 2,
    },
    secondStrategy: {
        ...SAME_RESULTS,
        'A Z': 8,
        'C Z': 7,
        'C Y': 6,
        'A Y': 4,
        'A X': 3,
        'C X': 2,
    },
};

console.log('PART 1: ', GAME_ROUNDS.reduce((acc, val) => acc + GAME_RESULTS_SCHEMA.firstStrategy[val], 0));
console.log('PART 2: ', GAME_ROUNDS.reduce((acc, val) => acc + GAME_RESULTS_SCHEMA.secondStrategy[val], 0));