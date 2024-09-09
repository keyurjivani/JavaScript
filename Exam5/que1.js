let arr = [1, 2, 3, 4];

const ArrayOfSum = (subArray) => {
    let total = 0;
    for (let i = 0; i < subArray.length; i++) {
        total += subArray[i];
    }
    return total;
};

let max =0;
for (let i = 0; i < arr.length; i++) {
    let subArray = [];
    for (let j = i; j < arr.length; j++) {
        subArray.push(arr[j]);
        max = Math.max(max,ArrayOfSum(subArray))
    }
}
console.log(max);
