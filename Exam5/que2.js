let s = "bbbbb"
let arr = [...s]
// console.log(arr);
let Max =0
for(let i = 0; i<arr.length; i++){
    let Sub = new Set()
    for(let j =i;j<arr.length;j++){
        Sub.add(arr[j])
        console.log(Sub, Sub.size);
        if(Sub.size > Max){
            Max = Sub.size
        }
    }
    
}
console.log(Max);