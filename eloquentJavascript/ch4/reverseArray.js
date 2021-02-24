function reverseArr(arr){
    let reversedArray = [];
    for(item of arr){
        reversedArray.unshift(item);
    }
    return reversedArray
}

console.log(reverseArr([1,3,4]))

function reverseInPlace(arr){
    let temp;
    for(let i = 0; i < arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length-1-i] = temp
    }
    return arr
}

function reverseInPlace2(arr){
    
    return arr.push(arr[1]);
}

console.log(reverseInPlace2([2,3,4,5]))

