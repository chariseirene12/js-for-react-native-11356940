Array and User Profile Manipulation
This project includes functions to work with arrays of numbers and strings, and to create user profiles based on these arrays.

Task 1
Array Manipulation
File: arrayManipulation.js
Function: processArray
What it does:

Takes a list of numbers.
Returns a new list where:
Each even number (like 2, 4, 6) is squared (multiplied by itself).
Each odd number (like 1, 3, 5) is tripled (multiplied by 3).
Example:

javascript
Copy code
const inputNumbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputNumbers);
console.log(processedNumbers); // Output: [3, 4, 9, 16, 15]
Task 2
Modify Strings Based on Numbers
File: arrayManipulation.js
Function: formatArrayStrings
What it does:

Takes two lists: one with strings (words) and one with numbers processed by processArray.
Changes each string based on its corresponding number:
Makes the string uppercase if the number is even.
Makes the string lowercase if the number is odd.
Task 3
Create User Profiles

File: userInfo.js
Function: createUserProfiles
What it does:

Takes two lists: one with original names and one with modified names from Task 2.
Returns a list of objects where each object contains:
The original name.
The modified name.
A unique ID starting from 1.
