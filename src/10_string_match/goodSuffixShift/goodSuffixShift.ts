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


}
