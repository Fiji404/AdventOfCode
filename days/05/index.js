const { getInputData } = require('../../utils/getInputData');
const { cloneDeep } = require('lodash');

const procedureRearrangements = getInputData();
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

const rearrangeCreatesToOtherStack = (sourceStackIdx, destStackIdx, numberOfRearrangements, rearrangeByOne = true) => {
    if (rearrangeByOne) {
        const sourceStack = CREATE_STACKS_1[sourceStackIdx];
        const destStack = CREATE_STACKS_1[destStackIdx];
        const createToRearrange = sourceStack[0];
        destStack.unshift(createToRearrange);
        return sourceStack.shift();
    }

    const sourceStack = CREATE_STACKS_2[sourceStackIdx];
    const destStack = CREATE_STACKS_2[destStackIdx];
    const createsToBeRearranged = sourceStack.splice(0, numberOfRearrangements);
    destStack.unshift(...createsToBeRearranged);
};

procedureRearrangements.forEach(procedure => {
    const [numberOfRearrangements, sourceStack, destStack] = procedure.replace(/[a-z]/g, '').split('  ').map(Number);
    rearrangeCreatesToOtherStack(sourceStack - 1, destStack - 1, numberOfRearrangements, false);
    for (let i = 0; i < numberOfRearrangements; i++) {
        rearrangeCreatesToOtherStack(sourceStack - 1, destStack - 1);
    }
});

const byOne = CREATE_STACKS_1.map(stack => stack[0]).join('');
const byParts = CREATE_STACKS_2.map(stack => stack[0]).join('');
console.log(byOne);
console.log(byParts);