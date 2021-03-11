function range(start,end){
    let rangeArr = []
    for(let i = start; i <= end; i++){
        rangeArr.push(i);
    }
    return rangeArr;
}

function sum(...arr){
    const numbers = range(...arr);
    let i = 0;
    for(num of numbers){
        i += num;
    }
    return i;
}

function rangeStep(start,end,step=-1){
    let rangeArr = []
    for( let i = start; i <= end; i=i+step){
        rangeArr.push(i)
  }
  return rangeArr;
}
  
console.log(rangeStep(3,1,-1));
  
