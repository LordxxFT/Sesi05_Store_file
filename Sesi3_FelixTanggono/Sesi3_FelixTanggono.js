const height = 5;//Menentukan tinggi segitiga yaitu jumlah baris yang akan ditampilkan

for (let i = 1; i <= height; i++) {//i digunakan untuk mengatur jumlah baris
  let row = '';// Siapkan string kosong untuk tiap baris
  for (let j = 1; j <= i; j++) {//j untuk mengatur jumlah bintang setiap baris
    row += '*';// Tambah satu bintang setiap kali loop dalam berputar
  }
  console.log(row);// Cetak baris setelah selesai disusun
}