// let arr = [7, 1, 5, 3, 6, 4];
// let ans = 0
// let min = arr[0]; // Initialize min with the first element of the array
// let max = arr[0]; // Initialize max with the first element of the array

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i]; // Update min if current element is smaller
//     }
//     if (arr[i] > arr[i+1]) {
//         max = arr[i]; // Update max if current element is larger
//     }

//     if(min < max){
//          ans = max - min
//     }
// }

// console.log("Minimum value:", min);
// console.log("Maximum value:", max);
// console.log(ans);


const bubblesort = () =>{
    let arr = [5,14,3,2,1]
    for(let i =0 ;i<arr.length-1;i++){
        for(let j =0 ; j<arr.length-1-i; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr);
}
bubblesort()
