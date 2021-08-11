export class Edge {
    begin: number;
    end: number;
    weight: number;
    constructor (begin: number, end: number, weight: number) {
      this.begin = begin;
      this.end = end;
      this.weight = weight;
    }
}
