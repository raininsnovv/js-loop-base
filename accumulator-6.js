let arr = [23,4,12,4,55,123,79]
let accumulatorOdd = []
for (let i = 0;i<arr.length;i++){
    if(arr[i]%2!==0){
        accumulatorOdd.push(arr[i])
    }
}
console.log(accumulatorOdd)