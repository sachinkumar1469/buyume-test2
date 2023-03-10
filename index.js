// You are given an array of length N (1 < N <= 100) and a number K. Print the array after K rotations in clockwise direction.
// E.g. 
// N = 10, K = 3
// Arr = [1,2,3,4,5,6,7,8,9,10]
// after K rotations
// Arr = [4,5,6,7,8,9,10,1,2,3]

// NOTE:
// Please mention use of any in-built javascript function is not allowed like shift, unshift, substr etc.
// You can use any editor of your choice.

function rotateArray(arr,k){
    let len = arr.length;

    // Outer for loops run k times
    for(let i = 1; i<=k ;i++){

        // first is used to store the first index value and then append it to the last
        let first = arr[0];

        // This for loops run len-2 times to shift each index value to the left
        for(let j = 0;j<len-1;j++){
            arr[j]=arr[j+1];
        }

        // Adding first value to the last index
        arr[len-1]=first;
    }
    return arr;
}

console.log(rotateArray([1,2],3));