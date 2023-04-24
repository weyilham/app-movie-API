//arrow function javascrips

let mahasiswa = ["Ilham Maulana", "Muhamad Rizky", "Dede Rodyah"];

// let jumlahNama = function () {
//   return mahasiswa.map(function (nama) {
//     return {
//       nama: nama,
//       panjangHuruf: nama.length,
//     };
//   });
// };

// let jumlahNama = () => mahasiswa.map((nama) => nama.length);
let jumlahNama = () =>
  mahasiswa.map((nama) => ({ nama: nama, panjangHuruf: nama.length }));

console.log(jumlahNama());
