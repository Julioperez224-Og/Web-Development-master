
//Array to List and List to Array
function arrayToList (arr){
  for ( var i = arr.length - 1; i >=0; i--){
    //assign values this way?
    //works backwards from last item in the array to the first 
    //in order to get nested lists
    var list = { value: arr[i], rest: list};
  }
  return list;
}

console.log(arrayToList([1,2,3]));



function listToArray (list){
    var listArray = [];
    //node begins as list; while node is not undefined; node becomes node.rest
    //this moves from the outermost list to the innermost sublist
    for (var node = list; node; node = node.rest){
        listArray.push(node.value);
    }
    return listArray;
}

let factorial = function fac(num){
     
    if(num ===1 ){
        return 1;
    }
    return num * fac(num-1);
}

let final = factorial(5);
console.log(final)

