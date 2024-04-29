let arr = [1,2,3,4,5]
let n = arr.length;

let max = arr[0];
for(let i=0;i<n;i++)
{
    if(max > arr[i])
    {
        max = arr[i]
    }
}

console.log(max);
