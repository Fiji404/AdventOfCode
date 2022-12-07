import { getFormattedData } from '../../utils';
import { cloneDeep } from 'lodash';

const rearrangementCommands = getFormattedData('./input.txt');
const CREATE_STACKS_1 = [
    ['N', 'H', 'S', 'J', 'F', 'W', 'T', 'D'],
    ['G', 'B', 'N', 'T', 'Q', 'P', 'R', 'H'],
    ['V', 'Q', 'L'],
    ['Q', 'R', 'W', 'S', 'B', 'N'],
    ['B', 'M', 'V', 'T', 'F', 'D', 'N'],
    ['R', 'T', 'H', 'V', 'B', 'D', 'M'],
    ['J', 'Q', 'B', 'D'],
    ['Q', 'H', 'Z', 'R', 'V', 'J', 'N', 'D'],
    ['S', 'M', 'H', 'N', 'B'],
];
const CREATE_STACKS_2 = cloneDeep(CREATE_STACKS_1);

const rearrangeCreates = (sourceStackIdx: number, destStackIdx: number, numberOfRearrangements: number, arr: string[][]) => {
    const sourceStack = arr[sourceStackIdx];
    const destStack = arr[destStackIdx];
    const createsToBeRearranged = sourceStack.splice(0, numberOfRearrangements);
    destStack.unshift(...createsToBeRearranged);
};

for (const rearrangementCommand of rearrangementCommands) {
    const [createsToRearrangement, sourceStack, destStack] = rearrangementCommand.replace(/[a-z]/g, '').split('  ').map(Number);
    rearrangeCreates(sourceStack - 1, destStack - 1, createsToRearrangement, CREATE_STACKS_1);
    for (const _ of new Array(createsToRearrangement)) {
        rearrangeCreates(sourceStack - 1, destStack - 1, 1, CREATE_STACKS_2);
    }
}

console.log('PART 1: ', CREATE_STACKS_2.map(stack => stack[0]).join(''));
console.log('PART 2: ', CREATE_STACKS_1.map(stack => stack[0]).join(''));