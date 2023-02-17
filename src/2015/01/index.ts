import { getFormattedData } from '../../utils/index';

const FINAL_STATISTICS = [...getFormattedData('./input.txt')[0]].reduce(
    (acc, instruction, i) => {
        instruction === '(' ? acc.currentFloor++ : acc.currentFloor--;
        if (acc.currentFloor === -1 && acc.instructionCausesBasement === 0) acc.instructionCausesBasement = i + 1;
        return acc;
    },
    { currentFloor: 0, instructionCausesBasement: 0 }
);

console.log('PART 1: ', FINAL_STATISTICS.currentFloor)
console.log('PART 2: ', FINAL_STATISTICS.instructionCausesBasement)