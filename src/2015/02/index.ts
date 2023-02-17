import { getFormattedData } from "../../utils/index";

const PAPER_NEEDED = getFormattedData('./input.txt').reduce((acc, dimensions) => {
    const [l, w, h] = dimensions.split('x').map(d => +d);
    const lw = l * w, wh = w * h, hl = h * l;
    acc.partOne += (2 * lw) + (2 * wh) + (2 * hl) + Math.min(lw, wh, hl);
    acc.partTwo += [l, w, h].sort((a, b) => b - a).slice(-2).map(n => n * 2).reduce((acc, n) => acc + n, 0) + (l * w * h);
    return acc;
}, { partOne: 0, partTwo: 0 });

console.log('PART 1: ', PAPER_NEEDED.partOne);
console.log('PART 2: ', PAPER_NEEDED.partTwo);