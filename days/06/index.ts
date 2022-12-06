import { getRawData } from '../../utils/getFormattedData';
import { uniq } from 'lodash';

const dataStreamBufferCharacters: [string, number][] = [];
const charactersProcessAmount = { by4Characters: 0, by14Characters: 0 };
const computeProcessAmountForFirstMarker = (charAmount: number, amountOfUniqueChars: string, arr: string[]) => {
    for (const [idxOfStartingChar, _] of [...arr.entries()]) {
        for (const [idx, char] of [...arr.entries()].slice(idxOfStartingChar)) {
            if (dataStreamBufferCharacters.length === charAmount) {
                const removedStreamBufferChars = uniq(dataStreamBufferCharacters.map(charIndexPair => charIndexPair[0]));
                if (!(removedStreamBufferChars.length === dataStreamBufferCharacters.length)) {
                    dataStreamBufferCharacters.splice(0);
                    break;
                }
                charactersProcessAmount[amountOfUniqueChars] = dataStreamBufferCharacters.at(-1)[1] + 1;
            }
            dataStreamBufferCharacters.push([char, idx]);
        }
    }
    dataStreamBufferCharacters.splice(0)
};

computeProcessAmountForFirstMarker(4, 'by4Characters', getRawData('./input.txt').split(''))
computeProcessAmountForFirstMarker(14, 'by14Characters', getRawData('./input.txt').split(''));

console.log(charactersProcessAmount.by4Characters);
console.log(charactersProcessAmount.by14Characters);