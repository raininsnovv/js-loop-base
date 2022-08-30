let arr = [-2,5,6,8,-56,-8,3,-7]
let accum = 0
for(let i = 0;i<arr.length;i++){
    if(arr[i] > 0){
        accum = accum + arr[i]
    }
}
console.log(accum)