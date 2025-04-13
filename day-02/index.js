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
const bubble_sort = (arr) => {
    let length = arr.length;
    for(let i = 0; i < length - 1; i++) {
            for(let j = 0; j < length - i - 1; j++) {  // 5 
                console.log(length - i - 1)
                if(arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
                }
            }
    }

    return arr;
}

const bubble_sort_result = bubble_sort(arr);
console.log("bubble sort: ", bubble_sort_result);



  