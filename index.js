function circuitPower(voltage, current) {
    return voltage * current;
}

function findMaxNumber(arr) {
    if (arr.length === 0) {
        return null;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

function arrayValuesTypes(arr) {
    return arr.map(item => typeof item);
}

console.log('Circuit Power: ', circuitPower(110, 3)); // Output: 330
console.log('\n')

console.log('Max Number of Array: ', findMaxNumber([57, 2, 97, 11, 7])); // Output: 97
console.log('Empty Array: ', findMaxNumber([])); // Output: null
console.log('\n')

console.log('Merge Arrays: ', mergeArrays([11, 2, 32], [14, 51, 16])); // Output: [11, 2, 32, 14, 51, 16]
console.log('\n')

console.log('Values Types of Array: ', arrayValuesTypes([1, 2, "null", []])); // Output: ["number", "number", "string", "object"]
console.log('\n')