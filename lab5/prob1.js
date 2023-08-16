let newArray = [];
let primeArray = [];

function getPrimeNumbers(n) {
    for (let i = 0; i <= n; i++) {
        primeArray.push(i);
    }
}
for (primeNumber of newArray) {
    let i;
    for (i = 2; i < primeNumber; i++) {
        if (primeNumber % i == 0) {
            break;
        }
    }
    if (i == primeNumber) {
        console.log(i);
        primeArray.push(primeNumber);
    }
}

while (true) {
    let input = Number(prompt("Enter a positive integer:"));
    if (input >>> 0 === parseFloat(input)) {
        getPrimeNumbers(input);
        alert("For n = " + input + "Prime number are:" + primeArray);
        break;
    }
}
