let fullName = 'Muhammad Arief';
let fisrtName;
let lastName;

// fisrtName = fullName.slice(0, 8);
// lastName = fullName.slice(9); // slicing string by index

fisrtName = fullName.slice(0, fullName.indexOf(' ')); // mencari index dari 0 sampai 'spasi'
lastName = fullName.slice(fullName.indexOf(' ') + 1); // mencari dari index 'spasi' + 1

console.log(fisrtName);
console.log(lastName);