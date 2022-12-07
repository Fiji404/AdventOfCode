import { getRawData } from '../../utils';
import { uniq } from 'lodash';

const dataStreamBufferCharacters: [string, number][] = [];
const computeProcessAmountForFirstMarker = (charAmount: number, partName: string, arr: string[]) => {
    for (const [idxOfStartingChar, _] of [...arr.entries()]) {
        for (const [idx, char] of [...arr.entries()].slice(idxOfStartingChar)) {
            if (dataStreamBufferCharacters.length === charAmount) {
                const removedStreamBufferChars = uniq(dataStreamBufferCharacters.map(charIndexPair => charIndexPair[0]));
                if (!(removedStreamBufferChars.length === dataStreamBufferCharacters.length)) {
                    dataStreamBufferCharacters.splice(0);
                    break;
                }
                console.log(partName, dataStreamBufferCharacters.at(-1)[1] + 1);
            }
            dataStreamBufferCharacters.push([char, idx]);
        }
    }
    dataStreamBufferCharacters.splice(0);
};

computeProcessAmountForFirstMarker(4, 'PART 1:', getRawData('./input.txt').split(''));
computeProcessAmountForFirstMarker(14, 'PART 2:', getRawData('./input.txt').split(''));