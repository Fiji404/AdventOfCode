import { getFormattedData } from "../../utils"

const treesMap = getFormattedData('./input.txt').map(treesRow => treesRow.split('').map(Number));
console.log(treesMap);

const visibleTreesAmount = treesMap.reduce((acc, treeSizes, treeSizesIdx) => {
    for (const treeSize of treeSizes) {
        const prevTreeSizes = treeSizesIdx > 0 ? treeSizes[treeSizesIdx] : treeSizes[0];
        // const 
        // const isTreeVisible =
    }
    return acc;
})