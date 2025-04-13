
/*
---------binary search algorithm---------
1. Binary search is a searching algorithm that finds the position of a target value within a sorted array.
2. linear search is a searching algorithm that finds the position of a target value within an array.

*/








const target_number = 10;

const arr_of_number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binary_search(arr, target) {
    console.log( target);
  let start = 0;
  let end = arr.length - 1;
    for (let i = start; i <= end; i++) {
    const mid = Math.floor((start + end) / 2);
    // console.log(`start: ${start}, end: ${end}, mid: ${mid}`);
    //   checking target
    if (arr[mid] === target) {
      return arr[mid];
    } 
    
    if (arr[mid] < target) {
        start = mid + 1; 
      } else {
        end = mid - 1; 
      }
    }
    return -1;
}


// const result = binary_search(arr_of_number, target_number);
// console.log(result); 


const text_arr = [
    "sagor", "mohammad", "munthai", "rahim", "karim", "jamal", "kamal", "rony", "rakib", "nayeem",
    "tamim", "shakib", "liton", "nashit", "nafis", "tuhin", "sabbir", "fahim", "imran", "emran",
    "farhan", "tariq", "adnan", "shanto", "ridoy", "mehedi", "junaid", "hasib", "noman", "jalal",
    "rasel", "rubel", "masum", "sajid", "sumon", "sajjad", "kawsar", "rahat", "sohan", "fardin",
    "saif", "anik", "badhon", "joy", "himu", "shuvo", "rifat", "azad", "arif", "sabbirul",
    "shahriar", "sayem", "mahi", "mahir", "tarek", "tazim", "taimur", "ayan", "raiyan", "reaz",
    "yasin", "yousuf", "nashir", "khalid", "sadman", "shahab", "zihad", "imtiyaz", "arham", "ifaz",
    "afran", "israt", "nusrat", "nuzhat", "tanvir", "tanbin", "mim", "tahsin", "nafea", "sadik",
    "shafayet", "jawad", "jamil", "rifath", "alif", "mejbah", "sharif", "torikul", "milon", "jahid",
    "habib", "obayed", "kamrul", "shohan", "robin", "tanzim", "prince", "emon", "biplob", "shohanur"
  ];
  
const target_text = "kamal";
const text_arr_sorted = text_arr.sort();
// console.log(text_arr_sorted)
const text_result = binary_search(text_arr_sorted, target_text);
console.log(text_result);