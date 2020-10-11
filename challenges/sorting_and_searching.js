
/**
 * Given 2 sorted arrays, A & B, where A has a large enough buffer at the end to hold B.
 * Write a method to merge B into A in sorted order.
 *
 * @param A array
 * @param B array
 * @returns array
 */
const mergeArrays = (A, B) => {
    // Assumptions: A & B are arrays of numbers

    if (A.length === B.length) return B;

    const numItemsA = A.length - B.length;

    let curr = 0;
    for (let i = numItemsA + 1; i < A.length; i++) {
        A[i] = A[curr];
        A[curr] = null;
        curr++;
    }

    let bPtr = 0;
    let aPtr = numItemsA + 1;

    for (let i = 0; i < A.length; i++) {
        if (aPtr >= A.length || B[bPtr] <= A[aPtr]) {
            A[i] = B[bPtr];
            bPtr++;
        } else if (bPtr >= B.length || A[aPtr] <= B[bPtr]) {
            A[i] = A[aPtr];
            aPtr++;
        }
    }

    return A;
}

/**
 * This is a slight variation of what's in the book, as I had already done this question in the past:
 *
 * Given a sorted array of n integers that has been rotated an unknown number of
 * times, write code to find the original index of an element in the array.
 * You may assume that the array was originally sorted in ascending order.
 *
 * @param array array
 * @param target int
 * @returns int
 */
const findElement = (array, target) => {
    let unAdjIndex = -1;
    let startPt = -1;

    if (array.length === 0) return -1;

    if (array[0] === target) {
        unAdjIndex = 0;
    }

    if (array.length > 1 && array[0] < array[1]) {
        startPt = 0;
    }

    for (let i = 1; i < array.length; i++) {
        if (array[i] === target)
            unAdjIndex = i;

        if (array[i] < array[i-1])
            startPt = i;

        if (unAdjIndex > -1 && startPt > -1)
            break;
    }

    if (unAdjIndex === -1) {
        // Target not in the given array, return 'error'
        return unAdjIndex;
    }

    let adjustedIndex;
    if (startPt > unAdjIndex) {
        adjustedIndex = startPt + unAdjIndex;
    } else {
        adjustedIndex = unAdjIndex - startPt;
    }

    return adjustedIndex;
}

module.exports = {
    mergeArrays,
    findElement,
}
