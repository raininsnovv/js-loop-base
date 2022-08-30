let arr = [1,3,5,7,9,3,34,6,12]
let accumulatorEven = []
for(let i = 0;i<arr.length;i++){
    if(arr[i]%2===0){
        accumulatorEven.push(arr[i])
    }
}
console.log(accumulatorEven)