//distracturing function

//membuat kalkulasi menggunakan distracturing

// function kalkulasi(a, b) {
//   return {
//     penjumlahan: a + b,
//     pengurangan: a - b,
//     perkalian: a * b,
//     pembagian: a / b,
//   };
// }

// const { pengurangan, penjumlahan, pembagian, perkalian } = kalkulasi(10, 5);

// console.log(pembagian);
// console.log(penjumlahan);
// console.log(pengurangan);
// console.log(perkalian);

//membuat distructuring function mahasiswa

const mhs1 = {
  nama: "ilham Maulana",
  npm: 1271826373,
  jurusan: "sistem informasi",
  nilai: {
    uas: 80,
    uts: 98,
    kuis: 89,
  },
};

function cetakMhs({ nama, npm, jurusan, nilai: { uas, uts, kuis } }) {
  return `Halo nama saya ${nama}, npm saya ${npm}, dan saya dari jurusan ${jurusan}, Nilai UAS saya ${uas}`;
}

console.log(cetakMhs(mhs1));
