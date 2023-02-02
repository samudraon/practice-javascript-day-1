function factorial(number) {
    let multiplication = 1;
    for (let i = 1; i <= number; i++) {
        multiplication = multiplication * i;
        console.log(i, multiplication);
    }
    return multiplication;
}

const result = factorial(9);
console.log(result);