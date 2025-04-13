/* 
-------Sorting Algorithm-------
* 1. Bubble Sort
* 2. Selection Sort

*/

const arr = [5, 3, 8, 4, 2, 1, 7, 6]; // lenght = 8 and index = 0 to 7
/*

looping
arr = 5, 3, 8, 4, 2, 1, 7, 6


*/

function bubbleSort (arr) {
let length = arr.length; // 8
// loop through the array
    for(let i =0; i < length - 1; i ++){
        // find the largest number in the array
        for (let s = 0; s < length; s++){
            if(arr[s] > arr[s+1] ) {
               [arr[s], arr[s+1]] = [arr[s+1], arr[s]]; 
            }
        }
    }
// return the sorted array
    return arr;
}

const sortedArray = bubbleSort(arr);
console.log(sortedArray); // [1, 2, 3, 4, 5, 6, 7, 8]


function selectionSort(arr) {
    let length = arr.length; // 8
    // loop through the array
    for(let i =0; i < length - 1; i ++) {
        // find the smallest number in the array
        let maxIndex = i; // 0
        for (let s = i + 1; s < length; s++){
            if(arr[s] > arr[maxIndex] ) {
                maxIndex = s; 
            }
        }
        // swap the smallest number with the first number in the array
        [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
    }

    return arr;
}

const sortedArray2 = selectionSort(arr);
console.log(sortedArray2); // [1, 2, 3, 4, 5, 6, 7, 8]