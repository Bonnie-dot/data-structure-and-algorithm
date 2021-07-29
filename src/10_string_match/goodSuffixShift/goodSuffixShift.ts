import { generateHashTable } from '../badCharacterRule/badCharacterRule';

export class GoodSuffixShift {
  patterString: string;
  patternStringLength: number;
  suffix: number[];
  prefix: boolean[];

  constructor (patternString:string) {
    this.patterString = patternString;
    this.patternStringLength = patternString.length;
    this.suffix = new Array(this.patternStringLength).fill(-1);
    this.prefix = new Array(this.patternStringLength).fill(false);
    this.generateGS();
  }

  generateGS () {
    for (let i = 0; i < this.patternStringLength - 1; i++) {
      let j = i;
      let k = 0;// record the child string length
      while (j >= 0 && this.patterString[j] === this.patterString[this.patternStringLength - 1 - k]) {
        j--;
        k++;
        this.suffix[k] = j + 1;
      }
      if (j === -1) {
        this.prefix[k] = true;
      }
    }
  }

  matchWithBM (mainString: string) {
    // 1. found the bad character
    let matchMainStringWithPatternString = 0;
    while (matchMainStringWithPatternString <= mainString.length - this.patternStringLength) {
      let j = this.patternStringLength - 1;
      for (;j >= 0; j--) {
        if (mainString[matchMainStringWithPatternString + j] !== this.patterString[j]) { break; }
      }
      // 2.1 all match
      if (j === -1) {
        return matchMainStringWithPatternString;
      }
      // 2.2 not match;compare bad character rule with good suffix shift
      const hashTable = generateHashTable(this.patterString);
      const badCharacterNeedMoveNumber = j - hashTable[mainString[matchMainStringWithPatternString + j].charCodeAt(0)];
      let goodSuffixShiftNeedMoveNumber = 0;
      if (j < this.patternStringLength - 1) { // make sure have suffix
        goodSuffixShiftNeedMoveNumber = this.moveByGoodSuffix(j);
      }
      // because of under zero, so get the max value
      matchMainStringWithPatternString = matchMainStringWithPatternString + Math.max(badCharacterNeedMoveNumber, goodSuffixShiftNeedMoveNumber);
    }
    return -1;
  }

  moveByGoodSuffix (badCharacterIndex: number):number {
    const matchLength = this.patternStringLength - badCharacterIndex - 1;
    if (this.suffix[matchLength] !== -1) {
      return badCharacterIndex - this.suffix[matchLength] + 1;
    } else {
      for (let i = badCharacterIndex + 2; i < this.patternStringLength; i++) {
        if (this.prefix[i] === true) {
          return i;
        }
      }
      return this.patternStringLength;
    }
  }
}
