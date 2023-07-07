
const numbers = [];
let somma = 0;

while (somma < 50) {
    const numeroInserito = prompt("inserisci un numero");
    const number = parseInt(numeroInserito);

    if (!isNaN(number)) {
        numbers.push(number);
        somma += number;
    }
}

console.log(numbers);
console.log(somma);