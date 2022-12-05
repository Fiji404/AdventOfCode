import { getFormattedData } from '../../utils/getFormattedData';

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
        'A Y': 4,
        'C X': 2,
        'C Z': 7,
        'B Y': 5,
        'A X': 3,
        'A Z': 8,
        'C Y': 6,
        'B X': 1,
    },
};

const gameRounds = getFormattedData('./input.txt');

const firstStrategyPointsResult = gameRounds.reduce((acc, val) => acc + GAME_RESULTS_SCHEMA.firstStrategy[val], 0);
const secondStrategyPointsResult = gameRounds.reduce((acc, val) => acc + GAME_RESULTS_SCHEMA.secondStrategy[val], 0);

console.log('PART 1: ', firstStrategyPointsResult);
console.log('PART 2: ', secondStrategyPointsResult);
