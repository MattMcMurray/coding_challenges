
/**
 * Given 2 sorted arrays, A & B, where A has a large enough buffer at the end to hold B.
 * Write a method to merge B into A in sorted order.
 *
 * @param A array
 * @param B array
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

module.exports = {
    mergeArrays,
}
