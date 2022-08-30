let arr = ['js', 'java', 'kotlin', 'python','swift','golang']
let accum = []
for (let i = 0;i<arr.length;i++){
    if(arr[i].length>=3){
        accum.push(arr[i]);
    }
}
console.log(accum)