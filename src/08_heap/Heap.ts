export class Heap{

    private array: number[] = [];

    insert(value: number){
        this.array.push(value);
    }

    print(){
        return this.array;
    }
}
