import { getFormattedData } from "../../../utils/utils";

const sectionAssigmentsPairs = getFormattedData('./input.txt');
const separatedSectionAssignments = sectionAssigmentsPairs.map(assignment =>
    assignment.split(',').map(section => section.split('-').map(val => +val))
);

const overlapping = separatedSectionAssignments.reduce((acc, [first, second]) => {
    const isOverlappingFull = (first[0] <= second[0] && first[1] >= second[1]) || (second[0] <= first[0] && second[1] >= first[1]);
    const isOverlappingHalf = (first[0] <= second[0] && first[1] >= second[0]) || (first[0] >= second[0] && second[1] >= first[0]);
    if (isOverlappingFull) acc.full++;
    if (isOverlappingHalf) acc.half++;
    return acc;
}, { full: 0, half: 0 });

console.log(overlapping.full);
console.log(overlapping.half);