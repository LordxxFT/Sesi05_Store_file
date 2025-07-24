export function kalkulator(angka1, angka2, operator) {

angka1 = Number(angka1);
angka2 = Number(angka2);
//supaya angak1 dan angka2 hanya bisa dimasukan angka
    if (isNaN(angka1) || isNaN(angka2)) {
        return "Input harus berupa angka!";
    }

switch (operator) {

case "+":
    return angka1 + angka2; 
// tambahkan case untuk pengurangan
case "-":
    return angka1 - angka2;
// tambahkan case untuk pembagian
case "*":
    return angka1 * angka2;
// tambahkan case untuk perkalian
case "/":
    return angka2 !== 0 ? angka1 / angka2 : "Tidak bisa dibagi dengan nol!"; //tambahan pembagian
default:

return "Operator tidak valid!";
    }

}