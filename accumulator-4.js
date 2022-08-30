let arr = ['add','dsd','fdfs','asfss','dsdf','allrer']
let accum = []
for(let i = 0;i<arr.length;i++){
    if(arr[i][0].toLowerCase()=== 'a'){
        accum.push(arr[i])
    }
}
console.log(accum)