export class Kmp {
    patternString: string;
    mainString: string;
    patternStringLength: number;
    mainStringLength: number;
    nexts: number[];

    constructor (mainString: string, patternString: string) {
      this.mainString = mainString;
      this.mainStringLength = mainString.length;
      this.patternString = patternString;
      this.patternStringLength = patternString.length;
      this.nexts = new Array(this.patternStringLength).fill(-1);

      this.getNexts();
    }

    getNexts () {
      // eslint-disable-next-line no-unreachable-loop
      let k = -1;// the newest matched position
      for (let i = 1; i < this.patternStringLength; i++) {
        while (k !== -1 && this.patternString[k + 1] !== this.patternString[i]) {
          k = this.nexts[k];
        }
        if (this.patternString[k + 1] === this.patternString[i]) {
          ++k;
        }
        this.nexts[i] = k;
      }
    }
}
