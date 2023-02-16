import { getFormattedData } from "../../../utils/utils";

const compartmentGroup: string[] = []
const compartmentsListBy3Groups: string[][] = getFormattedData('./input.txt').reduce((compartmentGroups, compartment) => {
    compartmentGroup.push(compartment);
    if (compartmentGroup.length === 3) compartmentGroups.push([...compartmentGroup]) && compartmentGroup.splice(0);
    return compartmentGroups
}, []);

const compartmentsList = getFormattedData('./input.txt').map(list => [list.slice(0, list.length / 2), list.slice(list.length / 2)])
const alphabet = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'];

const getSumOfCommonCompartmentItems = (compartmentsList: string[][]) => {
    const commonCompartmentsItems = compartmentsList.map(compartments => {
        const longestCompartmentList = compartments.reduce((longestList, compartmentList) => compartmentList.length > longestList.length ? compartmentList : longestList, '');
        for (const compartmentItem of longestCompartmentList) {
            const sameCompartmentItemFromSecondList = compartments.every(compartmentList => compartmentList.includes(compartmentItem)) && compartmentItem
            if (sameCompartmentItemFromSecondList) return sameCompartmentItemFromSecondList
        }
    })
    return commonCompartmentsItems.reduce((acc, compItem) => acc + alphabet.indexOf(compItem) + 1, 0);
}

console.log('PART 1:', getSumOfCommonCompartmentItems(compartmentsList));
console.log('PART 2:', getSumOfCommonCompartmentItems(compartmentsListBy3Groups));