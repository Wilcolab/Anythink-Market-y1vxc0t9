function toCamelCase(str) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match) => 
            match.trim().charAt(0).toUpperCase()
        )
        .replace(/\s+/g, '');
}

// Example usage:
const input = "My variable Name";
const camelCaseOutput = toCamelCase(input);
console.log(camelCaseOutput); // Outputs: MyVariableName

