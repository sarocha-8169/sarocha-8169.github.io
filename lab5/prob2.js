let readInput = function() {
    const numbers = [];

    let promptForNumber = function() {
        const input = prompt("Enter a positive number (negative to quit):");
        const num = parseInt(input);

        if (Number.isNaN(num)) {
            return promptForNumber();
        }
        
        if (num >= 0) {
            numbers.push(num);
            promptForNumber();
        }
    }

    promptForNumber();
    return numbers;
}

let displayStats = function(list) {
    const sum = list.reduce((a, b) => a + b, 0);
    const average = list.length > 0 ? sum / list.length : 0;
    const max = list.length > 0 ? Math.max(...list) : 0;
    const min = list.length > 0 ? Math.min(...list) : 0;

    const stats = list.length > 0 ?
    `For the list: ${list} the average is ${average.toFixed(2)}, the minimum is ${min}, and the maximum is ${max}`:
    `For the list that is empty the average is ${average.toFixed(2)}, the minimum is ${min}, and the maximum is ${max}`;
    alert(stats);  
}

let list = readInput();
displayStats(list);