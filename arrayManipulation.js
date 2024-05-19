function processArray(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num * num; // Square the even number
        } else {
            return num * 3; // Triple the odd number
        }
    });
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const processedArray = processArray(inputArray);
console.log(processedArray); // Output: [3, 4, 9, 16, 15]

// Import or define the processArray function if not already defined
function processArray(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num * num; // Square the even number
        } else {
            return num * 3; // Triple the odd number
        }
    });
}

// Define the formatArrayStrings function
function formatArrayStrings(strings, numbers) {
    if (strings.length !== numbers.length) {
        throw new Error("Both arrays must have the same length");
    }

    return strings.map((str, index) => {
        const num = numbers[index];
        if (num % 2 === 0) {
            return str.toUpperCase(); // Capitalize the entire string if the number is even
        } else {
            return str.toLowerCase(); // Convert the string to lowercase if the number is odd
        }
    });
}

// Example usage:
const inputStrings = ["hello", "world", "JavaScript", "Is", "fun"];
const inputNumbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputNumbers);
const formattedStrings = formatArrayStrings(inputStrings, processedNumbers);

console.log(formattedStrings); // Output: ["hello", "WORLD", "javascript", "IS", "awesome"]
