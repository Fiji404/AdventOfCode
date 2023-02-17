import { getData } from '../../utils/index';

const POSSIBLE_MOVE_INSTRUCTIONS = {
    '^': { move: 0, decrementCord: 2 },
    '>': { move: 1, decrementCord: 3 },
    v: { move: 2, decrementCord: 0 },
    '<': { move: 3, decrementCord: 1 },
};

const updateCords = (prevCords: number[], cmd: string) => {
    prevCords[POSSIBLE_MOVE_INSTRUCTIONS[cmd].move]++;
    prevCords[POSSIBLE_MOVE_INSTRUCTIONS[cmd].decrementCord]--;
};

const getResult = (housesWithPresent: string[], cords: number[], cords2?: number[]) => {
    return getData('./input.txt', true).reduce((acc, cmd, i) => {
        if (i % 2 === 0 || !cords2) updateCords(cords, cmd);
        else updateCords(cords2, cmd);
        if (!housesWithPresent.includes(cords.join(''))) housesWithPresent.push(cords.join('')) && acc++;
        if (!cords2) return acc;
        else if (!housesWithPresent.includes(cords2.join(''))) housesWithPresent.push(cords2.join('')) && acc++;
        return acc;
    }, 1);
};

console.log('PART 1:', getResult(['0000'], [0, 0, 0, 0]));
console.log('PART 2:', getResult(['0000'], [0, 0, 0, 0], [0, 0, 0, 0]));