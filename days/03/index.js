const listItems = require('node:fs')
    .readFileSync('./data.txt', 'utf-8')
    .split('\n')
    .map(str => str.trim());

const alphabet = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const compartments = listItems.map(list => [list.slice(0, list.length / 2), list.slice(list.length / 2)]);

const commonItems = compartments.map(compartments => {
    for (const item1 of compartments[0]) {
        for (const item2 of compartments[1]) {
            const isCommonItem = item1 === item2;
            if (isCommonItem) return item1;
        }
    }
});

const proritiesOfCommonItems = commonItems.map(cmnItem => alphabet.findIndex(alphaLetter => cmnItem === alphaLetter) + 1);
const sumOfItemsPriorities = proritiesOfCommonItems.reduce((acc, priority) => acc + priority, 0);

const group = [];
const listItemsByThreeGroups = listItems.reduce((groups, list) => {
    group.push(list);
    if (group.length === 3) {
        groups.push([...group]);
        group.splice(0);
    }
    return groups;
}, []);
const priorities = [];

listItemsByThreeGroups.forEach(group => {
    const longestList = group.reduce((longest, list) => (list.length > longest.length ? list : longest));
    for (const _ of group) {
        let crash = false;
        for (const letter of longestList) {
            if (group[0].indexOf(letter) !== -1 && group[1].indexOf(letter) !== -1 && group[2].indexOf(letter) !== -1) {
                priorities.push(letter);
                crash = !crash;
                break;
            }
        }
        if (crash) break;
    }
});

console.log(priorities);

const sumOfPriorities = priorities.map(cmnItem => alphabet.findIndex(alphaLetter => cmnItem === alphaLetter) + 1);;
const sum = sumOfPriorities.reduce((acc, val) => acc + val, 0)