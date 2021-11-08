function sumar (a, b) {
    console.log(a+b);
    return a + b

};

let sumar_af = (a, b) => a + b

console.log(sumar(2, 15) + sumar_af(7, 13));



function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(7))