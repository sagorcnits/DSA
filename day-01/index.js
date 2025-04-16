
/*
---------binary search algorithm---------
1. Binary search is a searching algorithm that finds the position of a target value within a sorted array.
2. linear search is a searching algorithm that finds the position of a target value within an array.

*/

const target_number = 10;

const arr_of_number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binary_search (arr,target) {
  let start = 0;
  let end = arr.length - 1;

  for(let i = start; i <= end; i++ ){
      let mid = Math.floor((start + end) / 2);
      console.log(mid)
      if(arr[mid] == target){
        return arr[mid];
      }

      if(arr[mid] < target){
        start = mid + 1
      } else {
        end = mid -1 
      }
  }

  return - 1

}




const result = binary_search(arr_of_number, target_number);
console.log(result); 



// console.log(text_result);


