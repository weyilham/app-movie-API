let angka = [-1, 3, 8, -5, -9, 7, 4, 2, 9, 6];
// const newAngka = [];

// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }

const hasil = angka
  .filter((a) => a > 3)
  .map((a) => a * 2)
  .reduce((acc, curr) => acc + curr);

console.log(hasil);
