// 1. Understanding merge sort
//Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

//What is the resulting list that will be sorted after 3 recursive calls to mergesort?
//[1,21,26,45,29,28,2,9,16,49,39,27,43,34,46,40]

//What is the resulting list that will be sorted after 16 recursive calls to mergesort?
//[1,2,9,16,21,26,27,28,29,34,39,40,43,45,46,49]

//What are the first 2 lists to be merged?
//[21] & [1]

//Which two lists would be merged on the 7th merge?
//[1,21,26,45] & [2,9,28,29]


// 2. Understanding Quicksort
// 1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

// The pivot could have been either 14 or 17 because in both cases, all numbers to the left are lower than the pivot value, and all numbers to the right are higher than the pivot value.

//2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.

// When using last item as pivot: [3,9,10,12,14,13,15,16,19,17]
// When using first item as pivot: [12,10,3,9,13,14,15,16,17,19]

// 6. Bucket Sort
// Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are. You can't use arr.splice(), shift() or unshift() for this exercise.


// 7. Sort in Place
// Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).

function shuffle(array) {
    let max = array.length
    for (let i = 0; i < max; i++) {
        let newIndex = randomIndex(max)
        swap(array, i, newIndex)
    }
    return array
}

function randomIndex(max) {
    return Math.floor(Math.random() * max)
}

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

//console.log(shuffle([1,2,3,4,5]))

// 8. Sorting books
//Imagine that I gave you 20 books to sort in alphabetical order. Express this as an algorithm and then implement your algorithm.

// function takes in an array of books
// determine a pivot point and complete a quick sort
// if book title is lexicographically smaller than pivot, then it will be sorted to the left
// if book title is lexicographically greater than pivot, then it will be sorted to the right
// to compare if a value is smaller, each letter in the title will need to be compared against each letter in the pivot title
// once the quicksort is completed, return the sorted array of books

