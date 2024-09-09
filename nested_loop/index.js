// for(let i=1; i<=2; i+=1){
//     for(let a=1; a<=5; a+=1){
//         console.log('number ke-', a);
//     }
// } // membuat perulangan sesuai yang di definisikan di for terluar

let row = window.prompt('isi row:');
let kolom = window.prompt('isi kolom');

for(let i=1; i<=row; i+=1){
    for(let a=1; a<=kolom; a+=1){
        document.getElementById('my').innerHTML += a;
    }
    document.getElementById('my').innerHTML += '<br>';
} // untuk membuat row dan kolom