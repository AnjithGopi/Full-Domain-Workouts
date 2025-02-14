function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array must have at least two elements";
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest === -Infinity ? "No second largest element" : secondLargest;
}

// Example usage:
console.log(findSecondLargest([10, 20, 5, 8, 30,30])); // Output: 20
console.log(findSecondLargest([5, 5, 5])); // Output: No second largest element
console.log(findSecondLargest([7])); // Output: Array must have at least two elements
