function isEven(n) {
    return n % 2 === 0;
}

// Input dan Output
const number = parseInt(prompt("Masukkan bilangan bulat: "));
console.log(`Apakah ${number} genap? ${isEven(number)}`);