/**
 * @param mainString  All string
 * @param patternString Need to match string
 */
export const matchWithBM = (mainString: string, patternString: string) => {
  let index = 0; // index for mainString and patternString align
export const matchWithBadCharacterRule = (mainString:string, patternString: string) => {
  let index = 0; // index for mainString and patternString align
  const patternStringLength = patternString.length;
  while (index <= mainString.length - patternStringLength) {
    let i = 0;
    for (i = patternStringLength - 1; i >= 0; i--) {
      if (mainString[i + index] !== patternString[i]) {
        break;
      }
    }
    if (i < 0) {
      return index;
    }
    const hashTable = generateHashTable(patternString);
    index = index + i - hashTable[mainString[i + index].charCodeAt(0)];
  }
  return -1;
};

export const generateHashTable = (patternString: string): number[] => {
  const array = new Array(256).fill(-1);
  for (let i = 0; i < patternString.length; i++) {
    array[patternString[i].charCodeAt(0)] = i;
  }
  return array;
};
