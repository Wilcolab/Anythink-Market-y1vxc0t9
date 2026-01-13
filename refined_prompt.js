/**
 * Converts a string to camelCase format.
 * 
 * @function convertToCamelCase
 * @param {string} str - The input string to be converted. Words should be separated by spaces.
 * @returns {string} The converted string in camelCase format where the first letter of each word
 *                   (except the first word) is capitalized and spaces are removed.
 * 
 * @example
 * // Convert a multi-word string to camelCase
 * const result = convertToCamelCase("My variable name");
 * console.log(result); // Output: "MyVariableName"
 * 
 * @example
 * // Single word input
 * const result = convertToCamelCase("hello");
 * console.log(result); // Output: "Hello"
 */

/**
 * Converts a string to dot-case format.
 * 
 * @function convertToDotCase
 * @param {string} str - The input string to be converted. Words should be separated by spaces.
 * @returns {string} The converted string in dot-case format where all letters are lowercase
 *                   and spaces are replaced with dots.
 * 
 * @example
 * // Convert a multi-word string to dot-case
 * const dotResult = convertToDotCase("My variable name");
 * console.log(dotResult); // Output: "my.variable.name"
 * 
 * @example
 * // Single word input
 * const dotResult = convertToDotCase("Hello");
 * console.log(dotResult); // Output: "hello"
 */
function convertToCamelCase(str) {
    return str
        .split(' ')
        .map((word, index) => {
            if (index === 0) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
const result = convertToCamelCase("My variable name");
console.log(result); // Output: MyVariableName
function convertToDotCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .join('.');
}

// Example usage:
const dotResult = convertToDotCase("My variable name");
console.log(dotResult); // Output: my.variable.name

/**
 * Converts a string from camelCase or PascalCase to kebab-case.
 * 
 * @function toKebabCase
 * @param {string} str - The input string in camelCase or PascalCase format.
 * @returns {string} The converted string in kebab-case format where uppercase letters
 *                   are preceded by hyphens and the entire string is lowercase.
 * 
 * @example
 * toKebabCase("HelloWorld") // Returns: "hello-world"
 * toKebabCase("myVariableName") // Returns: "my-variable-name"
 * toKebabCase("PascalCase") // Returns: "pascal-case"
 * toKebabCase("already-kebab") // Returns: "already-kebab"
 * toKebabCase("test") // Returns: "test"
 */
function toKebabCase(str) {
    return str
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase()
        .replace(/^-/, '')
        .replace(/-+/g, '-');
}

// Test cases
console.log(toKebabCase("HelloWorld")); // Output: "hello-world"
console.log(toKebabCase("myVariableName")); // Output: "my-variable-name"
console.log(toKebabCase("PascalCase")); // Output: "pascal-case"
console.log(toKebabCase("test")); // Output: "test"
console.log(toKebabCase("IOError")); // Output: "io-error"