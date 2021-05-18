export const searchValueWithLoop = (searchValue, data):number=>{
    let low: number = data[0];
    let high: number = data.length-1;
    while (low<=high){
        let mid = Math.floor(low+(high - low)/2);
        if (data[mid]===searchValue){
            return mid
        }else if (data[mid]>searchValue){
            low = 0;
            high = mid-1;
        }else {
            low = mid+1;
            high = data.length -1;
        }
    }
    return -1;
}

export const searchValueWithRecursive = (searchValue, data:Array<number>,low:number,high:number):number=>{
    let mid = Math.floor(low+(high - low)/2);
    if (low>high){
        return -1
    }
    if (data[mid]===searchValue){
        return mid
    }else if (data[mid]>searchValue){
        return searchValueWithRecursive(searchValue,data,0,mid-1)
    }else {
        return searchValueWithRecursive(searchValue,data,mid+1,data.length -1);
    }
}