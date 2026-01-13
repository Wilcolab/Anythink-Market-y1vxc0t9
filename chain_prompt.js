/**
 * Converts a string from camelCase or PascalCase to kebab-case.
 * Steps:
 * 1. Identifies uppercase letters and inserts a hyphen before each.
 * 2. Converts the entire string to lowercase.
 * 3. Ensures no leading/trailing or double hyphens.
 * @param {string} str - The input string to convert.
 * @returns {string} - The kebab-case formatted string.
 */
const toKebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map(x => x.toLowerCase())
    .join('-');

// Test cases
console.log(toKebabCase('camelCase')); // 'camel-case'
console.log(toKebabCase('PascalCase')); // 'pascal-case'
console.log(toKebabCase('myVariableName')); // 'my-variable-name'
console.log(toKebabCase('HelloWorld')); // 'hello-world'
console.log(toKebabCase('IAmListening')); // 'i-am-listening'   