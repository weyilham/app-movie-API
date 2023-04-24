//membuat objek

// Object Literal
var mhs = {
  nama: "ilham maulana",
  npm: 172168101,
  jurusan: "Sistem Informasi",
  email: "ilham@gmail.com",
};
// Object menggunakan Function Declaration

function buatObjectBaru(nama, npm, jurusan, email) {
  var mhs = {};
  mhs.nama = nama;
  mhs.npm = npm;
  mhs.jurusan = jurusan;
  mhs.email = email;
  return mhs;
}

var mahasiswa = buatObjectBaru(
  "deri rivaldi",
  282736272,
  "Teknik Informatika",
  "Deri@gmail.com"
);

//Constractor

function Mahasiswa(nama, npm, jurusan, email) {
  this.nama = nama;
  this.npm = npm;
  this.jurusan = jurusan;
  this.email = email;
}

var mhs = new Mahasiswa(
  "Nadya Rosdiana",
  98273728,
  "Sistem Infromasi",
  "nadya@gmail.com"
);
