export const searchValueWithLoop = (searchValue, data): number => {
  let low: number = data[0];
  let high: number = data.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (data[mid] === searchValue) {
      return mid;
    } else if (data[mid] > searchValue) {
      low = 0;
      high = mid - 1;
    } else {
      low = mid + 1;
      high = data.length - 1;
    }
  }
  return -1;
};

export const searchValueWithRecursive = (
  searchValue,
  data: Array<number>,
  low: number,
  high: number
): number => {
  let mid = Math.floor(low + (high - low) / 2);
  if (low > high) {
    return -1;
  }
  if (data[mid] === searchValue) {
    return mid;
  } else if (data[mid] > searchValue) {
    return searchValueWithRecursive(searchValue, data, 0, mid - 1);
  } else {
    return searchValueWithRecursive(
      searchValue,
      data,
      mid + 1,
      data.length - 1
    );
  }
};

export const searchValueWithFirstValue = (
  data: Array<number>,
  searchValue: number,
  low: number,
  high: number,
) => {
  if (low>=high) {
    return -1;
  }
  let mid = Math.floor(low + (high - low) / 2);
  if (data[mid]<searchValue){
    return searchValueWithFirstValue(data,searchValue,mid+1,high);
  }else if (data[mid]>searchValue){
    return searchValueWithFirstValue(data,searchValue,low,mid-1);
  }else {
   if (mid ===0 || data[mid -1] !== searchValue){
     return mid;
   }
    return searchValueWithFirstValue(data,searchValue,low,mid-1);
  }
};

export const searchValueWithLastValue = (
  data: Array<number>,
  searchValue: number,
  low: number,
  high: number,
) => {
  if (low>=high) {
    return -1;
  }
  let mid = Math.floor(low + (high - low) / 2);
  if (data[mid]<searchValue){
    return searchValueWithLastValue(data,searchValue,mid+1,high);
  }else if (data[mid]>searchValue){
    return searchValueWithLastValue(data,searchValue,low,mid-1);
  }else {
   if (mid === high || data[mid +1] !== searchValue){
     return mid;
   }
    return searchValueWithLastValue(data,searchValue,mid,high+1);
  }
};

export const searchValueWithFirstGreaterOrEqualValue =(data: Array<number>, searchValue: number, low: number, high: number)=>{
  if (low>high) {
    return -1;
  }
  let mid = Math.floor(low + (high - low) / 2);
  if (data[mid]<searchValue){
    return searchValueWithFirstGreaterOrEqualValue(data,searchValue,mid+1,high);
  }else{
    if (mid ===0 || data[mid-1]<searchValue){
      return mid;
    }
    return searchValueWithFirstGreaterOrEqualValue(data,searchValue,low,mid-1);
  }
}
