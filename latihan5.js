//closure

// function ucapanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}`);
//   };
// }

// let selamatPagi = ucapanSalam("pagi");
// let selamatSiang = ucapanSalam("Siang");
// let selamatMalam = ucapanSalam("Malam");

// selamatPagi("ilham");
// selamatSiang("Raki");
// selamatMalam("Majid");

//contoh 2

function add() {
  let counter = 0;

  return function () {
    return ++counter;
  };
}

let counter = 10;

let a = add();
console.log(a());
console.log(a());
console.log(a());
