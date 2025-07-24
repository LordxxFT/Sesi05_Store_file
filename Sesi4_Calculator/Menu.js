import { kalkulator } from './Rumus.js';
import readline from 'readline';

// Membuat interface untuk input dari terminal

    const inputUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});


// Minta input dari pengguna

inputUser.question('Masukkan angka pertama: ', angka1 => {
// tambahkan input untuk angka kedua
inputUser.question('Masukkan angka kedua: ', angka2 => {
// tambahkan input untuk memasukkan operator(+, -, *, /)
inputUser.question('Masukkan operator (+, -, *, /): ', operator => {
console.log(
// untuk memanggil hasil
`Hasil: ${kalkulator(

    parseFloat(angka1),

    parseFloat(angka2),

    operator

)}`

);

inputUser.close();

})})});