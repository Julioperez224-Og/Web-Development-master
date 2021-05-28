const arr = [[2,3,4],[5,6,7],[9,8,2]]

let out = arr.reduce((acc,curr)=>{
    return acc.concat(curr)
})

console.log(out)