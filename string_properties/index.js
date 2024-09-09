let userName = 'Muhammad Arief Minardi      ';
let phoneNumber = '0812-349-421';

// console.log(userName.length); // menghitung panjang dari string walaupun spasi
// console.log(userName.charAt(0)); // mengambil index dari string
// console.log(userName.indexOf('M')); // memberitahu index yang mau dicari
// console.log(userName.lastIndexOf('M')); // mengambil index terakhir 

// userName = userName.trim(); // untuk menghilangkan spasi kanan/kiri dari string
// userName = userName.toLowerCase(); // untuk memperkecil semua karakter
// userName = userName.toUpperCase(); // untuk memperbesar semua karakter

phoneNumber = phoneNumber.replaceAll('-'/* isi yang sebelum di ubah*/ , '=' /* isi yang mau di ubah*/);
console.log(phoneNumber);