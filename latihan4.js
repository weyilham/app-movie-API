//object literal

// let Mahasiswa = {
//   nama: "ilham Maulana",
//   energi: 10,

//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama}, Selamat Makan`);
//   },
// };

//object menggunakan function declaration

// let methodMahasiswa = {
//   // nama: nama,
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama}, Selamat Makan`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Hallo ${this.nama}, Selamat Main`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let ilham = Mahasiswa("ilham maualna", 20);

//Object Constactur

// function mahasiswa(nama, energi) {
//   //secara default object ini mempunyai method Object Create dan mempunyai Prototype

//   this.nama = nama;
//   this.energi = energi;
// }

// mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Hallo ${this.nama}, Selemat Makan`;
// };

// mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Hallo ${this.nama}, Selemat Tidur`;
// };

// mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Hallo ${this.nama}, Selemat Bermain`;
// };

//menggunakan class

class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Hallo ${this.nama}, Selemat Makan`;
  }

  tidur(jam) {
    this.energi += jam * 2;
    return `Hallo ${this.nama}, Selemat Tidur`;
  }

  main(jam) {
    this.energi -= jam;
    return `Hallo ${this.nama}, Selemat Bermain`;
  }
}

let ilham = new Mahasiswa("Ilham Maulana", 10);
