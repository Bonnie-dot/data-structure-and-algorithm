// recommend this article: https://www.zhihu.com/question/21923021
export class Kmp {
    patternString: string;
    mainString: string;
    patternStringLength: number;
    mainStringLength: number;
    nexts: number[];

    constructor(mainString: string, patternString: string) {
        this.mainString = mainString;
        this.mainStringLength = mainString.length;
        this.patternString = patternString;
        this.patternStringLength = patternString.length;
        this.nexts = new Array(this.patternStringLength).fill(-1);

        this.getNexts();
    }

    matchWithkmp() {
        let j = 0;
        for (let i = 0; i < this.mainStringLength; i++) {
            while (j > 0 && this.mainString[i] !== this.patternString[j]) {
                j = this.nexts[j - 1] + 1;
            }
            if (this.mainString[i] === this.patternString[j]) {
                j++;
            }
            if (j === this.patternStringLength) {
                return i - j + 1;
            }
        }
        return -1;
    }

    getNexts() {
        let k = -1; // the newest matched position
        for (let i = 1; i < this.patternStringLength; i++) {
            while (
                k !== -1 &&
                this.patternString[k + 1] !== this.patternString[i]
            ) {
                k = this.nexts[k];
            }
            if (this.patternString[k + 1] === this.patternString[i]) {
                ++k;
            }
            this.nexts[i] = k;
        }
    }
}
